<script setup lang="ts">
import type { EmitErrorObj } from 'nes-vue'
import { useInstance, useELement } from 'src/composables/instance'
import { NesVue } from 'nes-vue'
import { useCurrentGame } from 'src/stores/current'
import { useControler } from 'stores/controler'
import { getNow, stopDefault, setStorage, getStorage, removeStorage, isNotNull, isBetween } from 'src/utils'
import { errorNotify } from 'src/utils/notify'
import { config } from 'src/client.config'
import VolumeKnob from 'components/VolumeKnob.vue'
import { useMobile } from 'src/composables/mobile'
import { object_keys } from '@taiyuuki/utils'

const props = defineProps<{ romInfo: RomInfo }>()

const controler = useControler()// 控制器映射 pinia
const current = useCurrentGame()// 保存于local的游戏信息 pinia

const nes_vue = useInstance<typeof NesVue>()// 模拟器组件实例
const knob = useInstance<typeof VolumeKnob>()// 音量组件实例
const screen = useELement()// 游戏显示区域HTML元素
const zone = useELement()

const romLoading = ref(true)// ROM加载状态
const pauseState = ref(false)// 游戏暂停
const saveable = ref(true)// 游戏可保存，暂时不让本地ROM进行保存
const showKeyboardOptions = ref(false)// 显示键盘设置
const showSaveOption = ref(false)// 显示存档
const showMobileMenu = ref(false)// 显示手机端菜单
const gameURL = ref(props.romInfo.url)
const autoStart = ref(true)
const isMobile = useMobile()

function success() {
    autoStart.value = true
    romLoading.value = false
}

// 空存档对象
const emptySaveData: SaveData = {
    id: '-1',
    image: '',
    title: '',
    date: '',
}
// 设置空存档
function setEmptyData(): SaveData[] {
    return Array.from<SaveData>({ length: config.emulator.saveTotal }).fill(emptySaveData)
}
const saveDatas = reactive<SaveData[]>(setEmptyData())
// 游戏画面大小
const screenSize = reactive({
    width: '512px',
    height: '480px',
})
// 缓存画面大小
const lastSize = {
    width: screenSize.width,
    height: screenSize.height,
}

// 存档id
function getSaveId(index: number) {
    return `${props.romInfo.id}_${index}`
}

// 保存游戏
function save(index: number) {
    if (romLoading.value || !saveable.value) {
        return
    }
    const saveImage = nes_vue.value.screenshot() as HTMLImageElement
    saveImage.onload = () => {
        const id = getSaveId(index)
        nes_vue.value.save(id)
        const cvs = document.createElement('canvas')
        cvs.width = 48
        cvs.height = 45
        const ctx = cvs.getContext('2d')
        if (isNotNull(ctx)) {
            ctx.drawImage(saveImage, 0, 0, cvs.width, cvs.height)
            saveDatas[index] = {
                id: props.romInfo.id + id,
                image: cvs.toDataURL('image/png'),
                date: getNow(),
                title: props.romInfo.title,
            }
            setStorage(props.romInfo.id, unref(saveDatas))
        }
    }
}

// 加载存档
function load(index?: number) {
    if (romLoading.value || !saveable.value) {
        return
    }
    nes_vue.value.load(getSaveId(index ?? 0))
    showSaveOption.value = false
    if (pauseState.value) {
        pauseState.value = false
    }
}

// 删除存档
function remove(index: number) {
    if (romLoading.value) {
        return
    }
    nes_vue.value.remove(getSaveId(index))
    saveDatas[index ?? 0] = emptySaveData
    if (saveDatas.every(item => item.id === '-1')) {
        removeStorage(props.romInfo.id)
    }
    else {
        setStorage(props.romInfo.id, unref(saveDatas))
    }
}

// 游戏暂停或继续
function play() {
    if (pauseState.value) {
        nes_vue.value.play()
    }
    else {
        nes_vue.value.pause()
    }
    pauseState.value = !pauseState.value
}

// 游戏重启
function reset() {
    if (romLoading.value) {
        return
    }
    nes_vue.value.reset()
    pauseState.value = false
}

// 截图
function screenshot() {
    if (romLoading.value) {
        return
    }
    nes_vue.value.screenshot(true)
}

function mute() {
    knob.value.volumeOff()
}

// 全屏切换
const isFullScreen = ref(false)// 全屏状态
function fullscreen() {
    if (isNotNull(screen.value)) {
        if (document.fullscreenElement) {
            document.exitFullscreen()
            isFullScreen.value = false
        }
        else {
            screen.value.requestFullscreen()
            isFullScreen.value = true
        }
    }
}
// 初始化游戏画面大小
function initScreenSize() {
    const { clientWidth } = document.documentElement
    const { innerHeight } = window
    let width = clientWidth * 0.6
    if (clientWidth < 768) {
        width = clientWidth - 40
    }
    let height = width * 240 / 256
    if (height > innerHeight * 0.8) {
        height = innerHeight * 0.8
        width = (height * 256 / 240)
    }
    screenSize.width = width + 'px'
    screenSize.height = height + 'px'
}

// 调整画面大小
function fullscreenHandler() {
    if (document.fullscreenElement) {
        lastSize.width = screenSize.width
        lastSize.height = screenSize.height
        screenSize.width = '100vw'
        screenSize.height = '100vh'
    }
    else if (isFullScreen.value) {
        screenSize.width = lastSize.width
        screenSize.height = lastSize.height
    }
    else {
        initScreenSize()
    }
}

// 鼠标滑入游戏界面显示控制区域
const mouseMoving = ref(false)
let mouseMovingStamp: number
function showConsole() {
    if (mouseMoving.value) {
        clearTimeout(mouseMovingStamp)
    }
    else {
        mouseMoving.value = true
        screen.value.style.cursor = 'default'
    }
    mouseMovingStamp = window.setTimeout(() => {
        mouseMoving.value = false
        screen.value.style.cursor = 'none'
    }, 1500)
}

// 选择本地ROM
function selecteLocalRom(e: Event) {
    const target = e.target as HTMLInputElement
    const localRoms = target.files
    if (isNotNull(localRoms)) {
        gameURL.value = URL.createObjectURL(localRoms[0])
        pauseState.value = false
        saveable.value = false
        target.value = ''
    }
}

// 返回默认游戏
function backToDefault() {
    gameURL.value = props.romInfo.url
    pauseState.value = false
    saveable.value = true
}

// 错误处理
function nesErrorAlert(e: EmitErrorObj) {
    switch (e.code) {
        case 404:
            errorNotify('无法获取ROM：地址无效或网络错误')
            break
        case 0:
            errorNotify('不支持的游戏ROM')
            break
        case 1:
            errorNotify('保存失败')
            break
        case 2:
            errorNotify('存档不存在或数据错误')
            break
        default:
            break
    }
}

// 游戏快捷键
function systemControlEvent(e: KeyboardEvent) {
    switch (e.code) {
        case controler.p0.SAVE:
            save(0)
            break
        case controler.p0.LOAD:
            load(0)
            break
        case controler.p0.PAUSE:
            play()
            break
        case controler.p0.RESET:
            reset()
            break
        case controler.p0.FULL:
            fullscreen()
            break
        case controler.p0.SUSPEND:
            knob.value.volumeOff()
            break
        case controler.p0.CUT:
            screenshot()
            break
        default:
            break
    }
}

const mapperState = computed(() => ({
    'down': {
        code: controler.p1.DOWN,
        state: false,
    },
    'up': {
        code: controler.p1.UP,
        state: false,
    },
    'left': {
        code: controler.p1.LEFT,
        state: false,
    },
    'right': {
        code: controler.p1.RIGHT,
        state: false,
    },
}))
const mapperKeys = object_keys(mapperState.value)

function buttonTouch(key: string, type: string) {
    switch (key) {
        case 'A':
            document.dispatchEvent(new KeyboardEvent(type, { code: controler.p1.A }))
            break
        case 'B':
            document.dispatchEvent(new KeyboardEvent(type, { code: controler.p1.B }))
            break
        case 'C':
            document.dispatchEvent(new KeyboardEvent(type, { code: controler.p1.C }))
            break
        case 'D':
            document.dispatchEvent(new KeyboardEvent(type, { code: controler.p1.D }))
            break
        case 'AB':
            document.dispatchEvent(new KeyboardEvent(type, { code: controler.p1.A }))
            document.dispatchEvent(new KeyboardEvent(type, { code: controler.p1.B }))
            break
        case 'START':
            document.dispatchEvent(new KeyboardEvent(type, { code: controler.p1.START }))
            break
        case 'SELECT':
            document.dispatchEvent(new KeyboardEvent(type, { code: controler.p1.SELECT }))
            break
        default:
            break
    }
}

onBeforeMount(() => {
    if (current.refresh) {
        autoStart.value = false
    }
    else {
        autoStart.value = true
    }
    current.refresh = true
})

onMounted(() => {
    window.addEventListener('resize', fullscreenHandler)
    document.addEventListener('keypress', systemControlEvent)
    if (isMobile.value) {
        screenSize.width = '100vw'
        screenSize.height = '100vh'
        document.documentElement.style.overflow = 'hidden'
        document.onselectstart = () => false
    }
    else {
        nextTick(initScreenSize)
    }
    Object.assign(saveDatas, getStorage(props.romInfo.id, setEmptyData()))

    if (isMobile.value) {
        import('nipplejs').then(({ default: nipple }) => {
            const mapper = nipple.create({
                zone: zone.value,
                mode: 'static',
                position: {
                    left: '50%',
                    bottom: '100px',
                },
                threshold: config.emulator.threshold,
            })

            mapper.on('move', (_, s) => {
                if (!s.direction) {
                    return
                }
                const DG = (90 - config.emulator.degree) / 2
                const degree = s.angle.degree
                const check = isBetween(degree, 0, DG)
            || isBetween(degree, 90 - DG, 90 + DG)
            || isBetween(degree, 180 - DG, 180 + DG)
            || isBetween(degree, 270 - DG, 270 + DG)
            || isBetween(degree, 360 - DG, 360)
                const stateList = s.direction ? check ? [s.direction.angle] : [s.direction.x, s.direction.y] : []
                mapperKeys.forEach(key => {
                    if (mapperState.value[key].state && !stateList.includes(key)) {
                        mapperState.value[key].state = false
                        document.dispatchEvent(new KeyboardEvent('keyup', { code: mapperState.value[key].code }))
                    }
                    else if (!mapperState.value[key].state && stateList.includes(key)) {
                        mapperState.value[key].state = true
                        document.dispatchEvent(new KeyboardEvent('keydown', { code: mapperState.value[key].code }))
                    }
                })
            })

            object_keys(mapperState.value).forEach(key => {
                mapper.on('end', () => {
                    if (mapperState.value[key].state) {
                        mapperState.value[key].state = false
                        document.dispatchEvent(new KeyboardEvent('keyup', { code: mapperState.value[key].code }))
                    }
                })
            })
        })
    }
})

onBeforeUnmount(() => {
    mouseMovingStamp && clearTimeout(mouseMovingStamp)
    window.removeEventListener('resize', fullscreenHandler)
    document.removeEventListener('keypress', systemControlEvent)
    if (isMobile.value) {
        document.documentElement.style.overflow = 'auto'
        document.onselectstart = () => true
    }
})
</script>

<template>
  <div>
    <el-dialog
      v-if="!isMobile"
      v-model="showKeyboardOptions"
      width="fit-content"
      :draggable="true"
      append-to-body
      class="bg-color-var-theme"
      @dragover="stopDefault"
    >
      <template #header>
        <div text="bold 28">
          按键设置
        </div>
      </template>
      <template #footer>
        <div
          bg="color-var-secondary"
          text="#fff 12 shadow-4 bold"
          pointer
          w="fit"
          h="14px"
          p="x-12"
          border="radius-2"
          opacity="0.6 hover:1"
          scale="active:95"
          select="none"
          shadow="3"
          @click="controler.$reset"
        >
          默认
        </div>
      </template>
      <KeyboardOption />
    </el-dialog>
    <el-dialog
      v-model="showSaveOption"
      width="600px"
      append-to-body
      :draggable="true"
      class="bg-color-var-theme w-max-100%"
    >
      <template #header>
        <div text="bold 28">
          存档
        </div>
      </template>
      <div
        v-for="(saveData, index) in saveDatas"
        :key="saveData.id"
        m="y-10"
        shadow="var-fcolor-1"
        bg="color-var-base"
      >
        <div
          v-if="romInfo"
          flex="row justify-between items-center"
          w="max-550 100%"
          border="box"
          p="r-10"
        >
          <template v-if="saveData.id !== '-1'">
            <img
              :src="saveData.image"
              :alt="saveData.title"
            >
            <div
              m="l-5"
              w="max-300 50%"
            >
              <div>{{ saveData.title }}</div>
              <div
                v-show="!isMobile"
                m="t-5"
              >
                保存于{{ saveData.date }}
              </div>
            </div>
            <el-button
              type="danger"
              @click="remove(index)"
            >
              删除
            </el-button>
            <el-button
              type="primary"
              class="text-color-var-primary-front"
              @click="load(index)"
            >
              读取
            </el-button>
          </template>
          <template v-else>
            <div
              w="48"
              h="45"
              shadow="var-fcolor-1"
            />
            <div
              m="l-5"
              text="line-45 center"
              w="max-400 50%"
            >
              空
            </div>
          </template>
          <el-button
            type="primary"
            class="text-color-var-primary-front"
            @click="save(index)"
          >
            保存
          </el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      v-if="isMobile"
      v-model="showMobileMenu"
      :modal="false"
      class="mobile-menu"
    >
      <div flex="row items-center justify-around wrap">
        <IconMob
          v-if="pauseState"
          icon="i-fluent-emoji-high-contrast:play-button"
          label="继续"
          @click="play"
        />
        <IconMob
          v-else
          icon="i-fluent-emoji-high-contrast:pause-button"
          label="暂停"
          @click="play"
        />

        <IconMob
          icon="i-fluent-emoji-high-contrast:record-button"
          label="重启"
          @click="reset"
        />

        <IconMob
          icon="i-fluent-emoji-high-contrast:floppy-disk"
          label="存档"
          @click="showSaveOption = true"
        />

        <IconMob
          v-if="current.gain > 0"
          icon="i-ic:round-volume-up"
          label="静音"
          @click="mute"
        />
        <IconMob
          v-else
          icon="i-ic:round-volume-off"
          label="有声"
          @click="mute"
        />

        <IconMob
          icon="i-ic:baseline-cancel"
          label="关闭"
          @click="showMobileMenu = false"
        />

        <IconMob
          icon="i-ic:round-exit-to-app"
          label="退出"
          @click="$router.push('/gamelist')"
        />
      </div>
    </el-dialog>
    <div
      ref="screen"
      overflow-hidden
      w="fit"
      text="center"
      shadow="var-fcolor-2"
      :class="{ 'pst-rel': !isMobile, '[&>.control]:translate-y-0': mouseMoving && !isMobile, 'mb-container': isMobile }"
      @mousemove="showConsole"
    >
      <nes-vue
        ref="nes_vue"
        :auto-start="autoStart"
        label="开始游戏"
        db-name="nes-web"
        :url="gameURL"
        :width="screenSize.width"
        :height="screenSize.height"
        :gain="current.gain"
        :p1="controler.p1"
        :p2="controler.p2"
        @success="success"
        @error="nesErrorAlert"
      />
      <div
        v-if="!romLoading"
        pst="abs b-0 l-0"
        bg="color-#00000020"
        flex="row items-center justify-between"
        border="box"
        w="100%"
        p="10"
        transition="transform ease-out"
        duration="500"
        class="translate-y-50px hover:translate-y-0 ease-in control"
      >
        <div
          w="20"
          h="20"
          class="[&>div]:m-x-5"
          @click="play"
        >
          <IconInner
            v-if="pauseState"
            icon="i-ic:baseline-play-circle-outline"
          />
          <IconInner
            v-else
            icon="i-ic:baseline-pause-circle-outline"
          />
        </div>
        <div
          flex="row items-center justify-end"
          class="[&>div]:m-x-5"
        >
          <IconInner
            icon="i-ic:outline-photo-camera"
            @click="screenshot"
          />
          <VolumeKnob
            ref="knob"
            v-model:gain="current.gain"
          />
          <IconInner
            icon="i-ic:baseline-fullscreen"
            @click="fullscreen"
          />
        </div>
      </div>
      <div
        v-if="pauseState && mouseMoving"
        w="64"
        h="64"
        pst="abs t-50% l-50%"
        text="white"
        pointer
        class="i-ic:baseline-play-circle-outline translate-x--50% translate-y--50%"
        @click="play"
      />
      <template v-if="isMobile">
        <div
          ref="zone"
          pst="fix l-0 b-80 r-60% t-60%"
        />
        <div pst="abs l-60% b-80 r-0 t-60%">
          <div pst="abs r-20 b-50">
            <NBtn
              name="A"
              @down="buttonTouch('A', 'keydown')"
              @up="buttonTouch('A', 'keyup')"
            />
          </div>
          <div pst="abs r-100 b-50">
            <NBtn
              name="B"
              @down="buttonTouch('B', 'keydown')"
              @up="buttonTouch('B', 'keyup')"
            />
          </div>
          <div pst="abs r-20 b-120">
            <NBtn
              name="C"
              @down="buttonTouch('C', 'keydown')"
              @up="buttonTouch('C', 'keyup')"
            />
          </div>
          <div pst="abs r-100 b-120">
            <NBtn
              name="D"
              @down="buttonTouch('D', 'keydown')"
              @up="buttonTouch('D', 'keyup')"
            />
          </div>
          <div pst="abs r-60 b-190">
            <NBtn
              name="AB"
              @down="buttonTouch('AB', 'keydown')"
              @up="buttonTouch('AB', 'keyup')"
            />
          </div>
        </div>
        <div pst="abs l-120 b-42%">
          <OBtn
            name="START"
            @down="buttonTouch('START', 'keydown')"
            @up="buttonTouch('START', 'keyup')"
          />
        </div>
        <div pst="abs l-20 b-42%">
          <OBtn
            name="SELECT"
            @down="buttonTouch('SELECT', 'keydown')"
            @up="buttonTouch('SELECT', 'keyup')"
          />
        </div>
        <div
          class="i-ic:baseline-view-module"
          text="white 2rem"
          opacity="0.25"
          active="opacity-0.5 scale-120"
          pst="abs r-50% b-140"
          transform="translate-x-50%"
          @click="showMobileMenu = true"
        />
      </template>
    </div>
    <div
      flex="row items-center justify-between"
      p="10"
    >
      <div
        flex="row"
        class="[&>*]:m-r-10"
      >
        <div
          @click="play"
        >
          <el-tooltip
            v-if="pauseState"
            content="继续"
            placement="top"
          >
            <IconOutside
              icon="i-fluent-emoji-high-contrast:play-button"
            />
          </el-tooltip>
          <el-tooltip
            v-else
            content="暂停"
            placement="top"
          >
            <IconOutside
              icon="i-fluent-emoji-high-contrast:pause-button"
            />
          </el-tooltip>
        </div>
        <el-tooltip
          content="重启"
          placement="top"
        >
          <IconOutside
            icon="i-fluent-emoji-high-contrast:record-button"
            @click="reset"
          />
        </el-tooltip>
        <el-tooltip
          content="选择本地游戏"
          placement="top"
        >
          <label for="current">
            <IconOutside
              icon="i-fluent-emoji-high-contrast:outbox-tray"
            />
            <input
              id="current"
              type="file"
              accept=".nes"
              hidden
              @change="selecteLocalRom"
            >
          </label>
        </el-tooltip>
        <el-tooltip
          v-if="saveable"
          content="存档"
          placement="top"
        >
          <IconOutside
            icon="i-fluent-emoji-high-contrast:floppy-disk"
            @click="showSaveOption = true"
          />
        </el-tooltip>
        <el-tooltip
          v-else
          :content="`返回：${romInfo.title}`"
          placement="top"
        >
          <IconOutside
            icon="i-fluent-emoji-high-contrast:back-arrow"
            @click="backToDefault"
          />
        </el-tooltip>
      </div>
      <el-tooltip
        content="按键设置"
        placement="top"
      >
        <IconOutside
          v-show="!isMobile"
          icon="i-fluent-emoji-high-contrast:keyboard"
          @click="showKeyboardOptions = true"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<style lang="scss">
.mb-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  transform: translateZ(1px);
}

.el-overlay {
  transform: translateZ(2px);
}

@media screen and (max-width: 768px) {
  body {
    user-select: none;
  }
}
