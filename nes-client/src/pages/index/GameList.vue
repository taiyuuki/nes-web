<template>
  <div>
    <div text="bold 1.4em">
      游戏列表
    </div>
    <div

      flex="row items-center"
      m="y-20"
      pointer
    >
      <div
        v-for="item in categorys"
        :key="item.id"
        m="r-5"
        p="5"
        :class="{
          'select-category': item.id === currentCategory,
        }"
        @click="getGameList(item.id)"
      >
        {{ item.name }}
      </div>
    </div>
    <template v-if="(gameList.length > 0)">
      <div
        flex="row items-center wrap"
        class="game-list"
      >
        <GameCard
          v-for="game in gameList"
          :key="game.id"
          :game-info="game"
          :card-height="cardHeight"
          class="pointer"
          @click="playGame(game)"
        />
      </div>
    </template>
    <el-pagination
      v-if="total > 20"
      v-model:current-page="currentPage"
      layout="prev, pager, next, total, jumper"
      :page-size="20"
      :total="total"
    />
  </div>
</template>

<script setup lang="ts">
import { requestCategory, requestGameList } from 'src/axios'
import { useCurrentGame } from 'src/stores/current'

const categorys = reactive<Category[]>([])
const gameList = reactive<RomInfo[]>([])
const router = useRouter()
const current = useCurrentGame()
let currentPage = $ref(1)
let total = $ref(0)
let currentCategory = $ref('')
let cardHeight = $ref('auto')

async function getGameList(key?: string) {
  if (key !== void 0) {
    currentPage = 1
    currentCategory = key
  }
  const resData = await requestGameList({
    cat: currentCategory,
    publisher: '',
    keyword: '',
    page: currentPage,
    limit: 20,
  })
  gameList.length = 0
  Object.assign(gameList, resData.result)
  total = resData.count
}

function playGame(game: RomInfo) {
  current.game = game
  router.push('/gamepad')
}

watch(() => currentPage, () => {
  getGameList()
})

function computedCardHeight() {
  const { clientWidth } = document.documentElement
  switch (true) {
    case clientWidth > 1024:
      cardHeight = (clientWidth * 0.26) + 'px'
      break
    case clientWidth > 768 && clientWidth < 1024:
      cardHeight = (clientWidth * 0.38) + 'px'
      break
    case clientWidth < 768:
      cardHeight = (clientWidth * 0.51) + 'px'
      break
    case clientWidth < 599:
      cardHeight = (clientWidth * 1.01) + 'px'
      break
    default:
      cardHeight = (clientWidth * 0.26) + 'px'
      break
  }
}

onMounted(async () => {
  Object.assign(categorys, await requestCategory())
  computedCardHeight()
  window.addEventListener('resize', computedCardHeight)
  getGameList()
})

onUnmounted(() => {
  window.removeEventListener('resize', computedCardHeight)
})
</script>

<style lang="scss">
.select-category {
  color: #fffef9;
  background-color: var(--primary);
  border-radius: 5px;
}

.game-list {
  > div:nth-child(n) {
    margin-left: calc(4% / 3);
  }

  > div:nth-child(4n + 1) {
    margin-left: 0;
  }
}

@media screen and (max-width: 1024px) {
  .game-list {
    > div:nth-child(n) {
      margin-left: 2%;
    }

    > div:nth-child(3n + 1) {
      margin-left: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .game-list {
    > div:nth-child(n) {
      margin-left: 2%;
    }

    > div:nth-child(2n + 1) {
      margin-left: 0;
    }
  }
}

@media screen and (max-width: 599px) {
  .game-list {
    > div:nth-child(n) {
      margin-left: 0;
    }
  }
}
</style>