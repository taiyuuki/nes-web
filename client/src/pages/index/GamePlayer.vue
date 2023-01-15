<template>
  <div
    v-if="romInfoZip.length > 0"
    flex="md:row"
  >
    <GameEmulator
      m="r-10"
      :rom-info="romInfo"
    />
    <div
      flex="1"
    >
      <div>
        <img
          :src="romInfo.cover"
          :alt="romInfo.title"
          w="50%"
        >
        <img
          :src="romInfo.image"
          :alt="romInfo.title"
          w="50%"
        >
        <div
          text="bold 20"
        >
          {{ romInfo.id }} - {{ romInfo.title }}
        </div>
        <p>发行： {{ romInfo.publisher }}</p>
        <p>发布： {{ romInfo.source }}</p>
        <p>容量： {{ romSize }} KB</p>
        <p>类型： {{ romInfo.type }} - {{ romInfo.category }}</p>
        <p>备注： {{ romInfo.comment }}</p>
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
const recent = useRecent()// 最近游玩

const romInfoZip = $ref<RomInfo[]>([])// ROM数据用数组包一层，减少类型报错。
const romInfo = $computed(() => romInfoZip[0])// 然后用计算属性获取ROM信息

// 页面title
const title = $computed(() => {
  return (romInfoZip.length > 0 ? romInfo.title : 'FC模拟器') + ' - 在线红白机游戏'
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
  // 添加至最近游玩
  const inIndex = recent.list.findIndex((rom) => rom.id === romInfo.id)
  if (inIndex !== 0) {
    if (inIndex > 0) {
      recent.list.splice(inIndex, 1)
    }
    recent.list.unshift(romInfo)
    if (recent.list.length > config.recentTotal) {
      recent.list.pop()
    }
  }
}

// ROM大小换算
const romSize = $computed(() => {
  return (Number(romInfo.size ?? 0) / 1024).toFixed(2)
})

onMounted(requestGameInfo)
</script>