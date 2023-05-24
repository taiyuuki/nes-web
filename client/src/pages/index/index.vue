<script setup lang="ts">
import { useRecent } from 'stores/recent'
import { useCurrentGame } from 'src/stores/current'
import { pushToGamePlayer } from 'src/router/playgame'
import { requestRandomList } from 'src/axios'

const current = useCurrentGame()
const recent = useRecent()
const randomList = reactive<RomInfo[]>([])

function playGame(romInfo: RomInfo) {
    current.game = romInfo
    current.fromRouter = true
    pushToGamePlayer(romInfo.id)
}

async function getRandomList() {
    const data = await requestRandomList(4)
    Object.assign(randomList, data.result)
}

onMounted(async () => {
    await getRandomList()
})
</script>

<template>
  <div
    display="sm:flex block"
    flex="items-center"
  >
    <TBanner />
  </div>
  <div
    v-if="recent.list.length > 0"
  >
    <div flex="row items-center">
      <div
        text="bold 1.4em"
        m="r-20"
      >
        最近游玩
      </div>
      <el-tooltip
        content="清空游玩记录"
        placement="top"
      >
        <div
          class="i-ic:outline-cleaning-services"
          w="15"
          h="15"
          text="color-var-fcolor hover:color-var-primary"
          pointer
          @click="recent.$reset"
        />
      </el-tooltip>
    </div>
    <div
      flex="row items-center wrap"
      m="t-20"
      class="game-list"
    >
      <GameCard
        v-for="romInfo in recent.list"
        :key="romInfo.id"
        :rom-info="romInfo"
        class="pointer"
        @click="playGame(romInfo)"
      />
    </div>
  </div>
  <div v-if="randomList.length > 0">
    <div flex="row items-center justify-between">
      <div
        text="bold 1.4em"
        m="r-20"
      >
        随机推荐
      </div>
      <router-link
        to="/gamelist"
        class="text-var-fcolor hover:text-var-primary"
      >
        更多>>
      </router-link>
    </div>
    <div
      flex="row items-center wrap"
      m="t-20"
      class="game-list"
    >
      <GameCard
        v-for="romInfo in randomList"
        :key="romInfo.id"
        :rom-info="romInfo"
        class="pointer"
        @click="playGame(romInfo)"
      />
    </div>
  </div>
</template>
