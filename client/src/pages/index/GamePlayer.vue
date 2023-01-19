<template>
  <div v-if="romInfoZip.length > 0">
    <div
      flex="md:row"
    >
      <div m="r-10 t-10">
        <GameEmulator
          :rom-info="romInfo"
        />
      </div>
      <div
        v-if="!isGettingRandom"
        flex="1"
        p="5"
      >
        <div
          text="bold 1.2rem"
          m="t-5 b-20"
          p="2"
        >
          同类游戏推荐
        </div>
        <RecomBox
          v-for="rom in randomList"
          :key="rom.id"
          :rom-info="rom"
          @click="playGame(rom)"
        />
      </div>
    </div>
    <div
      m="t-10"
      p="10"
      shadow="var-fcolor-1"
      class="no-zpix"
    >
      <el-descriptions
        :title="romInfo.title"
        :column="1"
        class="w-fit"
        border
      >
        <el-descriptions-item
          label-align="right"
        >
          <template #label>
            发行
          </template>
          {{ romInfo.publisher }}
        </el-descriptions-item>
        <el-descriptions-item
          label-align="right"
        >
          <template #label>
            发布
          </template>
          {{ romInfo.source }}
        </el-descriptions-item>
        <el-descriptions-item
          label-align="right"
        >
          <template #label>
            容量
          </template>
          {{ romSize }} KB
        </el-descriptions-item>
        <el-descriptions-item
          label-align="right"
        >
          <template #label>
            类型
          </template>
          {{ romInfo.type }} - {{ romInfo.category }}
        </el-descriptions-item>
        <el-descriptions-item
          label-align="right"
        >
          <template #label>
            备注
          </template>
          {{ romInfo.comment }}
        </el-descriptions-item>
      </el-descriptions>
      <div
        flex="row"
        m="t-10"
      >
        <DesImg
          :src="romInfo.cover"
          :title="romInfo.title"
          class="m-r-10"
        />
        <DesImg
          :src="romInfo.image"
          :title="romInfo.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { requestRomInfo, requestRandomList } from 'src/axios'
import { useCurrentGame } from 'src/stores/current'
import { useRecent } from 'stores/recent'
import { errorNotify } from 'src/use/notify'
import { config } from 'src/client.config'
import { pushToGamePlayer } from 'src/use/playgame'

const { query } = useRoute()// 获取路由参数
const current = useCurrentGame()// 当前运行游戏
const recent = useRecent()// 最近游玩

const romInfoZip = $ref<RomInfo[]>([])// ROM数据用数组包一层，减少类型报错。
const romInfo = $computed(() => romInfoZip[0])// 然后用计算属性获取ROM信息
const randomList = reactive<RomInfo[]>([])
const isGettingRandom = $computed(() => randomList.length === 0)

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

function playGame(game: RomInfo) {
  current.game = game
  current.fromRouter = true
  pushToGamePlayer(game.id)
}

onMounted(async () => {
  await requestGameInfo()
  const data = await requestRandomList(config.recomTotal, romInfo.type, romInfo.id)
  Object.assign(randomList, data.result)
})
</script>