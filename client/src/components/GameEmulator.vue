<template>
  <div>
    <el-dialog
      v-model="showKeyboardOptions"
      width="fit-content"
      :draggable="true"
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
      width="fit-content"
      :draggable="true"
      class="bg-color-var-theme"
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
          w="550"
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
              w="300"
            >
              <div>{{ saveData.title }}</div>
              <div m="t-5">
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
              w="min-400"
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
    <div
      ref="screen"
      overflow-hidden
      bg="#000"
      w="fit"
      text="center"
      pst="rel"
      shadow="var-fcolor-2"
      :class="{ '[&>.control]:translate-y-0': mouseMoving }"
      @mousemove="showConsole"
    >
      <nes-vue
        ref="nes"
        auto-start
        label="开始游戏"
        :url="gameURL"
        :width="screenSize.width"
        :height="screenSize.height"
        :gain="current.gain"
        :p1="controler.p1"
        :p2="controler.p2"
        @success="romLoading = false;"
        @error="nesErrorAlert"
        @saved="successNotify('保存游戏')"
        @loaded="successNotify('读取游戏')"
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
    </div>
    <div
      flex="row items-center justify-between"
      shadow="var-fcolor-2"
      bg="color-var-theme"
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
          icon="i-fluent-emoji-high-contrast:keyboard"
          @click="showKeyboardOptions = true"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NesVueInstance, EmitErrorObj } from 'nes-vue'
import { NesVue } from 'nes-vue'
import { useCurrentGame } from 'src/stores/current'
import { useControler } from 'stores/controler'
import { getNow, stopDefault, setStorage, getStorage, removeStorage, isNotNull } from 'src/utils'
import { errorNotify, successNotify } from 'src/utils/notify'
import { config } from 'src/client.config'
import VolumeKnob from 'components/VolumeKnob.vue'
import { createGamepad } from 'src/utils/gamepad'

const props = defineProps<{ romInfo: RomInfo }>()

const controler = useControler()// 控制器映射 pinia
const current = useCurrentGame()// 保存于local的游戏信息 pinia

const nes = $ref<NesVueInstance | null>(null)// 模拟器组件实例
const knob = $ref<InstanceType<typeof VolumeKnob> | null>(null)// 音量组件实例
const screen = $ref<HTMLDivElement | null>(null)// 游戏显示区域HTML元素

const romLoading = $ref(true)// ROM加载状态
let pauseState = $ref(false)// 游戏暂停
let saveable = $ref(true)// 游戏可保存，暂时不让本地ROM进行保存
const showKeyboardOptions = $ref(false)// 显示键盘设置
let showSaveOption = $ref(false)// 显示存档
let gameURL = $ref(props.romInfo.url)

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
const saveDatas = $ref<SaveData[]>(setEmptyData())
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
  if (romLoading || !saveable) {
    return
  }
  if (isNotNull(nes)) {
    const saveImage = nes.screenshot()
    if (isNotNull(saveImage)) {
      saveImage.onload = () => {
        const id = getSaveId(index)
        nes.save(id)
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
  }
}

// 加载存档
function load(index?: number) {
  if (romLoading || !saveable) {
    return
  }
  if (isNotNull(nes)) {
    nes.load(getSaveId(index ?? 0))
    showSaveOption = false
  }
}

// 删除存档
function remove(index: number) {
  if (romLoading) {
    return
  }
  if (isNotNull(nes)) {
    nes.remove(getSaveId(index))
    saveDatas[index ?? 0] = emptySaveData
    if (saveDatas.every(item => item.id === '-1')) {
      removeStorage(props.romInfo.id)
    }
    else {
      setStorage(props.romInfo.id, unref(saveDatas))
    }
  }
}

// 游戏暂停或继续
function play() {
  if (isNotNull(nes)) {
    if (pauseState) {
      nes.play()
    }
    else {
      nes.pause()
    }
    pauseState = !pauseState
  }
}

// 游戏重启
function reset() {
  if (romLoading) {
    return
  }
  if (isNotNull(nes)) {
    nes.reset()
    pauseState = false
  }
}

// 截图
function screenshot() {
  if (romLoading) {
    return
  }
  if (isNotNull(nes)) {
    nes.screenshot(true)
  }
}

// 全屏切换
let isFullScreen = false// 全屏状态
function fullscreen() {
  if (isNotNull(screen)) {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
    else {
      screen.requestFullscreen()
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
    isFullScreen = true
    lastSize.width = screenSize.width
    lastSize.height = screenSize.height
    screenSize.width = '100vw'
    screenSize.height = '100vh'
  }
  else if (isFullScreen) {
    isFullScreen = false
    screenSize.width = lastSize.width
    screenSize.height = lastSize.height
  }
  else {
    initScreenSize()
  }
}

// 鼠标滑入游戏界面显示控制区域
let mouseMoving = $ref(false)
let mouseMovingStamp: number
function showConsole() {
  if (!isNotNull(screen)) {
    return
  }
  if (mouseMoving) {
    clearTimeout(mouseMovingStamp)
  }
  else {
    mouseMoving = true
    screen.style.cursor = 'default'
  }
  mouseMovingStamp = window.setTimeout(() => {
    mouseMoving = false
    if (isNotNull(screen)) {
      screen.style.cursor = 'none'
    }
  }, 1500)
}

// 选择本地ROM
function selecteLocalRom(e: Event) {
  const target = e.target as HTMLInputElement
  const localRoms = target.files
  if (isNotNull(localRoms)) {
    gameURL = URL.createObjectURL(localRoms[0])
    pauseState = false
    saveable = false
    target.value = ''
  }
}

// 返回默认游戏
function backToDefault() {
  gameURL = props.romInfo.url
  pauseState = false
  saveable = true
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
  if (isNotNull(nes)) {
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
        if (isNotNull(knob)) {
          knob.volumeOff()
        }
        break
      case controler.p0.CUT:
        screenshot()
        break
      default:
        break
    }
  }
}

const gamepad = createGamepad()

onMounted(() => {
  window.addEventListener('resize', fullscreenHandler)
  document.addEventListener('keypress', systemControlEvent)
  nextTick(initScreenSize)
  Object.assign(saveDatas, getStorage(props.romInfo.id, setEmptyData()))

  gamepad.setCallback(controler.keydown, controler.keyup)
  gamepad.frame()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', fullscreenHandler)
  document.removeEventListener('keypress', systemControlEvent)
  gamepad.close()
})
</script>