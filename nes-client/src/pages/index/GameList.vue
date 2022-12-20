<template>
  <div>
    <div text="bold 1.4em">
      游戏列表 <span
        v-if="total > 0"
        text="weight-initial 16"
      >({{ total }})</span>
    </div>
    <div

      flex="row items-center wrap"
      m="y-20"
      pointer
    >
      <div
        m="r-5"
        p="5"
        class="category"
        :class="{ 'selected-category': currentCategory === '' }"
        @click="getGameList('')"
      >
        全部
      </div>
      <div
        v-for="item in categorys"
        :key="item.id"
        m="r-5"
        p="5"
        class="category"
        :class="{
          'selected-category': item.id === currentCategory,
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
      class="m-x-auto m-t-10 w-fit"
    />
  </div>
</template>

<script setup lang="ts">
import { requestCategory, requestGameList } from 'src/axios'
import { useCurrentGame } from 'src/stores/current'
import { pushToGamePlayer } from 'src/use/playgame'

useHead({ title: '游戏列表 - 在线FC游戏' })

const categorys = reactive<Category[]>([])
const gameList = reactive<RomInfo[]>([])
const current = useCurrentGame()
let currentPage = $ref(1)
let total = $ref(0)
let currentCategory = $ref('')

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
  current.fromRouter = true
  pushToGamePlayer(game.id)
}

watch(() => currentPage, () => {
  getGameList()
})

onMounted(async () => {
  Object.assign(categorys, await requestCategory())
  getGameList()
})
</script>

<style lang="scss">
.category:hover {
  color: #fffef9;
  background-color: var(--primary);
  border-radius: 5px;
}

.selected-category {
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