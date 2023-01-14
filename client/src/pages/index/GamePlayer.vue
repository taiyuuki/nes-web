<template>
  <div
    v-if="romInfoIsGetted"
    flex="md:row"
  >
    <GameEmulator
      m="r-10"
      :rom-info="romInfoZip[0]"
    />
    <div
      flex="1"
    >
      <div>
        <img
          :src="romInfoZip[0].cover"
          :alt="romInfoZip[0].title"
          w="50%"
        >
        <img
          :src="romInfoZip[0].image"
          :alt="romInfoZip[0].title"
          w="50%"
        >
        <div
          text="bold 20"
        >
          {{ romInfoZip[0].id }} - {{ romInfoZip[0].title }}
        </div>
        <p>发行： {{ romInfoZip[0].publisher }}</p>
        <p>发布： {{ romInfoZip[0].source }}</p>
        <p>容量： {{ romSize }} KB</p>
        <p>类型： {{ romInfoZip[0].type }} - {{ romInfoZip[0].category }}</p>
        <p>备注： {{ romInfoZip[0].comment }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- TODO:骨架屏或Loading -->
  </div>
</template>

<script setup lang="ts">
import { requestRomInfo } from 'src/axios'
import { useCurrentGame } from 'src/stores/current'
import { useRecent } from 'stores/recent'
import { errorNotify } from 'src/use/notify'
import { config } from 'src/client.config'

const { query } = useRoute()// 获取路由参数
const current = useCurrentGame()// 当前运行游戏
const recent = useRecent()

const romInfoZip = $ref<RomInfo[]>([])// ROM信息
const romInfoIsGetted = $computed(() => romInfoZip.length === 1)

// 页面title
const title = $computed(() => {
  return (romInfoIsGetted ? romInfoZip[0].title : '在线模拟器') + ' - 在线红白机游戏'
})
useHead(() => ({ title }))

// 获取游戏数据
async function requestGameInfo() {
  if (current.fromRouter || query.id === void 0) {
    current.fromRouter = false
    romInfoZip[0] = current.game
  }
  else {
    const data = await requestRomInfo(query.id as string)
    if (data.code === 200) {
      current.game = data.rom
      romInfoZip[0] = data.rom
    }
    else {
      errorNotify('游戏不存在')
    }
  }
  const inIndex = recent.list.findIndex((rom) => rom.id === romInfoZip[0].id)
  if (inIndex !== 0) {
    if (inIndex > 0) {
      recent.list.splice(inIndex, 1)
    }
    recent.list.unshift(romInfoZip[0])
    if (recent.list.length > config.recentTotal) {
      recent.list.pop()
    }
  }
}

// ROM大小换算
const romSize = $computed(() => {
  return (Number(romInfoZip[0].size ?? 0) / 1024).toFixed(2)
})

onMounted(requestGameInfo)
</script>