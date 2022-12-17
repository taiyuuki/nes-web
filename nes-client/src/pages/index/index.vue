<template>
  <div>
    <div
      v-for="(value, key) in category"
      :key="key"
      @click="getGameList(key)"
    >
      {{ value }}
    </div>
    <template v-if="(gameList.length > 0)">
      <GameCard
        v-for="game in gameList"
        :key="game.id"
        :image-id="game.id"
        :title="game.title"
        @click="playGame(game)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { requestCategory, requestGameList } from 'src/axios'
import { useCurrentGame } from 'src/stores/current'

const category = reactive({})
const gameList = reactive<GameInfo[]>([])
const router = useRouter()
const current = useCurrentGame()
async function getGameList(key: string) {
  Object.assign(gameList, await requestGameList({
    cat: key,
    publisher: '',
    keyword: '',
    page: 1,
    limit: 20,
  }))
}

function playGame(game: GameInfo) {
  current.game = game
  router.push({
    path: '/gamepad',
    query: { url: current.game.url },
  })
}

onMounted(async () => {
  Object.assign(category, await requestCategory())
  getGameList('')
})
</script>