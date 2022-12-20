<template>
  <div flex="row">
    <div
      m="r-10"
      flex="3"
    >
      <div
        v-if="gameInfo"
        ref="screen"
        v-loading="requestLoading"
        overflow-hidden
        w="auto"
        bg="#000"
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
          :gain="gain"
          @success="romLoading = false;"
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
          >
            <IconControl
              v-if="pauseState"
              icon="i-ic:baseline-play-circle-outline"
              @click="play"
            />
            <IconControl
              v-else
              icon="i-ic:baseline-pause-circle-outline"
              @click="pause"
            />
          </div>
          <div
            flex="row items-center justify-end"
            class="[&>div]:m-x-5"
          >
            <IconControl
              icon="i-ic:outline-photo-camera"
              @click="screenshort"
            />
            <VolumeKnob v-model:gain="gain" />
            <IconControl
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
        v-if="gameInfo"
        text="bold 20"
      >
        {{ gameInfo.title }}
      </div>
      <div @click="save">
        保存
      </div>
    </div>
    <div
      flex="2"
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NesVueInstance } from 'nes-vue'
import { NesVue } from 'nes-vue'
import { requestRomInfo } from 'src/axios'
import { useCurrentGame } from 'src/stores/current'

const nes = $ref<NesVueInstance | null>(null)
const screen = $ref<HTMLDivElement | null>(null)
const { query } = useRoute()
const current = useCurrentGame()

const romLoading = $ref(true)
let requestLoading = $ref(true)
let pauseState = $ref(false)
let gameInfo = $ref<RomInfo | null>(null)
let title = $ref('在线FC游戏')
const gain = $ref(100)
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

function pause() {
  if (nes) {
    nes.pause()
    pauseState = true
  }
}

function play() {
  if (nes) {
    nes.play()
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
  const { clientHeight, clientWidth } = document.documentElement
  let width = clientWidth * 0.6
  let height = width * 240 / 256
  if (height > clientHeight * 0.8) {
    height = clientHeight * 0.8
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
  if (mouseMoving) {
    clearTimeout(stamp)
  }
  else {
    mouseMoving = true
  }
  stamp = setTimeout(() => {
    mouseMoving = false
  }, 1500)
}

onMounted(async () => {
  window.addEventListener('resize', fullscreenHandler)
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
})
</script>