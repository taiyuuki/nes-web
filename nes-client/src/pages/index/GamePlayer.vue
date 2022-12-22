<template>
  <div flex="md:row">
    <el-dialog
      v-model="showKeyboardOption"
      width="fit-content"
      :draggable="true"
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
    <div
      m="r-10"
    >
      <div
        v-if="gameInfo"
        ref="screen"
        v-loading="requestLoading"
        overflow-hidden
        bg="#000"
        w="fit"
        text="center"
        pst="rel"
        shadow="var-fcolor-1"
        :class="{ '[&>.control]:translate-y-0': mouseMoving }"
        @mousemove="showConsole"
      >
        <nes-vue
          ref="nes"
          :url="gameInfo.url"
          auto-start
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
            <el-tooltip
              content="截图"
              placement="bottom"
            >
              <IconInner
                icon="i-ic:outline-photo-camera"
                @click="screenshort"
              />
            </el-tooltip>
            <VolumeKnob v-model:gain="current.gain" />
            <el-tooltip
              content="全屏"
              placement="bottom"
            >
              <IconInner
                icon="i-ic:baseline-fullscreen"
                @click="fullscreen"
              />
            </el-tooltip>
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
        flex="row"
        shadow="inset-var-fcolor-2"
        p="10"
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
              icon="i-ic:baseline-play-circle-outline"
            />
          </el-tooltip>
          <el-tooltip
            v-else
            content="暂停"
            placement="top"
          >
            <IconOutside
              icon="i-ic:baseline-pause-circle-outline"
            />
          </el-tooltip>
        </div>
        <el-tooltip
          content="重启"
          placement="top"
        >
          <IconOutside
            icon="i-ic:sharp-power-settings-new"
            @click="reset"
          />
        </el-tooltip>
        <el-tooltip
          content="按键设置"
          placement="top"
        >
          <IconOutside
            icon="i-ic:outline-keyboard"
            @click="showKeyboardOption = true"
          />
        </el-tooltip>
      </div>
    </div>
    <div
      flex="1"
    >
      <div v-if="gameInfo">
        <img
          :src="gameInfo.cover"
          :alt="gameInfo.title"
          w="50%"
        >
        <img
          :src="gameInfo.image"
          :alt="gameInfo.title"
          w="50%"
        >
        <div
          v-if="gameInfo"
          text="bold 20"
        >
          {{ gameInfo.id }} - {{ gameInfo.title }}
        </div>
        <p>发行： {{ gameInfo.publisher }}</p>
        <p>发布： {{ gameInfo.source }}</p>
        <p>容量： {{ romSize }}KB</p>
        <p>类型： {{ gameInfo.type }} - {{ gameInfo.category }}</p>
        <p>备注： {{ gameInfo.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NesVueInstance, EmitErrorObj } from 'nes-vue'
import { NesVue } from 'nes-vue'
import { requestRomInfo } from 'src/axios'
import { useCurrentGame } from 'src/stores/current'
import { useControler } from 'stores/controler'
import { stopDefault } from 'src/utils'
import { errorNotify, successNotify } from 'src/use/notify'

const controler = useControler()
const nes = $ref<NesVueInstance | null>(null)
const screen = $ref<HTMLDivElement | null>(null)
const { query } = useRoute()
const current = useCurrentGame()

const romLoading = $ref(true)
let requestLoading = $ref(true)
let pauseState = $ref(false)
const showKeyboardOption = $ref(false)
let gameInfo = $ref<RomInfo | null>(null)
let title = $ref('在线FC游戏')

const screenSize = reactive({
  width: '512px',
  height: '480px',
})
const tempSize = {
  width: '512px',
  height: '480px',
}

useHead(() => ({ title }))

async function startGame() {
  const data = await requestRomInfo(query.id as string)
  if (data.code === 200) {
    current.game = data.rom
    gameInfo = data.rom
    requestLoading = false
  }
  else {
    console.log('游戏不存在')
  }
}

function save() {
  if (nes && gameInfo) {
    nes.save(gameInfo.id)
  }
}

function load() {
  if (nes && gameInfo) {
    nes.load(gameInfo.id)
  }
}

function play() {
  if (nes) {
    if (pauseState) {
      nes.play()
    }
    else {
      nes.pause()
    }
    pauseState = !pauseState
  }
}

function reset() {
  if (nes) {
    nes.reset()
    pauseState = false
  }
}

function screenshort() {
  if (nes) {
    nes.screenshot(true)
  }
}

function fullscreen() {
  if (screen) {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
    else {
      screen.requestFullscreen()
    }
  }
}

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

let isFullScreen = false
function fullscreenHandler() {
  if (document.fullscreenElement) {
    isFullScreen = true
    tempSize.width = screenSize.width
    tempSize.height = screenSize.height
    screenSize.width = '100vw'
    screenSize.height = '100vh'
  }
  else if (isFullScreen) {
    isFullScreen = false
    screenSize.width = tempSize.width
    screenSize.height = tempSize.height
  }
  else {
    initScreenSize()
  }
}

let stamp: NodeJS.Timeout
let mouseMoving = $ref(false)
function showConsole() {
  if (!screen) {
    return
  }
  if (mouseMoving) {
    clearTimeout(stamp)
  }
  else {
    mouseMoving = true
    screen.style.cursor = 'default'
  }
  stamp = setTimeout(() => {
    mouseMoving = false
    if (screen) {
      screen.style.cursor = 'none'
    }
  }, 1500)
}

function nesErrorAlert(e: EmitErrorObj) {
  switch (e.code) {
    case 404:
      errorNotify('获取ROM失败，地址无效或网络错误')
      break
    case 0:
      errorNotify('不支持的游戏ROM')
      break
    case 1:
      errorNotify('硬盘空间不够或浏览器不支持存档功能')
      break
    case 2:
      errorNotify('存档不存在或数据已损坏')
      break
    default:
      break
  }
}

const romSize = computed(() => {
  return (Number(gameInfo?.size ?? 0) / 1024).toFixed(2)
})

function systemControlEvent(e: KeyboardEvent) {
  if (nes && gameInfo) {
    switch (e.code) {
      case controler.p0.SAVE:
        save()
        break
      case controler.p0.LOAD:
        load()
        break
      case controler.p0.PAUSE:
        play()
        break
      case controler.p0.RESET:
        reset()
        break
      case controler.p0.SUSPEND:
        current.suspend()
        break
      case controler.p0.CUT:
        screenshort()
        break
      default:
        break
    }
  }
}

onMounted(async () => {
  window.addEventListener('resize', fullscreenHandler)
  document.addEventListener('keypress', systemControlEvent)
  if (current.fromRouter || query.id === void 0) {
    current.fromRouter = false
    gameInfo = current.game
    requestLoading = false
  }
  else {
    await startGame()
  }
  if (gameInfo) {
    title = gameInfo.title + ' - 在线FC游戏'
    nextTick(initScreenSize)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', fullscreenHandler)
  document.removeEventListener('keypress', systemControlEvent)
})
</script>