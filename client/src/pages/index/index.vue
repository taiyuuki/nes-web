<template>
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
  <!-- TODO: 首页随机显示游戏 -->
</template>

<script setup lang="ts">
import { useRecent } from 'stores/recent'
import { useCurrentGame } from 'src/stores/current'
import { pushToGamePlayer } from 'src/use/playgame'

const current = useCurrentGame()
const recent = useRecent()

function playGame(romInfo: RomInfo) {
  current.game = romInfo
  current.fromRouter = true
  pushToGamePlayer(romInfo.id)
}
</script>