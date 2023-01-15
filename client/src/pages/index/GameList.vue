<template>
  <div>
    <div text="bold 1.4em">
      游戏列表 <span
        v-if="total > 0"
        text="weight-initial 16"
      >({{ total }})</span>
    </div>
    <el-skeleton
      v-if="isGettingCategorys"
      animated
      style=" margin-top: 20px;"
    >
      <template #template>
        <el-skeleton-item
          v-for="i in 12"
          :key="i"
          variant="button"
          style=" height: 20px;margin-left: 5px;"
        />
      </template>
    </el-skeleton>
    <template v-else>
      <div
        flex="row items-center wrap"
        m="t-20"
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
    </template>
  </div>
  <div
    v-if="noResult"
    w="100%"
    m="y-100"
    opacity="0.5"
    text="center color-var-fcolor"
  >
    没有结果
  </div>
  <div
    v-else-if="isGettingGameList"
    flex="row items-center wrap"
    class="game-list"
  >
    <CardSkeletion
      v-for="i in config.cardSkeletonTotal"
      :key="i"
    />
  </div>
  <div
    v-else
    flex="row items-center wrap"
    m="t-20"
    class="game-list"
  >
    <GameCard
      v-for="game in gameList"
      :key="game.id"
      :rom-info="game"
      class="pointer"
      @click="playGame(game)"
    />
  </div>
  <el-pagination
    v-if="total > config.pageTotal && !isGettingGameList"
    v-model:current-page="currentPage"
    layout="prev, pager, next, total, jumper"
    background
    :page-size="config.pageTotal"
    :total="total"
    class="m-x-auto m-t-10 w-fit list-pagination"
  />
</template>

<script setup lang="ts">
import { requestCategory, requestGameList } from 'src/axios'
import { useCurrentGame } from 'src/stores/current'
import { pushToGamePlayer } from 'src/use/playgame'
import { config } from 'src/client.config'
import { isNotNull } from 'src/utils'

useHead({ title: '游戏列表 - 在线红白机游戏' })

const route = useRoute()

const categorys = reactive<Category[]>([])
const gameList = reactive<RomInfo[]>([])
const current = useCurrentGame()
let currentPage = $ref(1)
let total = $ref(0)
let currentCategory = $ref('')
let keyword = $ref('')
let noResult = $ref(false)

if (isNotNull(route.query.keyword)) {
  keyword = route.query.keyword as string
}

const isGettingCategorys = computed(() => categorys.length === 0)
const isGettingGameList = computed(() => gameList.length === 0)

async function getGameList(key?: string) {
  if (noResult) {
    noResult = false
  }
  if (isNotNull(key)) {
    currentPage = 1
    currentCategory = key
  }
  gameList.length = 0
  const resData = await requestGameList({
    cat: currentCategory,
    publisher: '',
    keyword,
    page: currentPage,
    limit: config.pageTotal,
  })
  Object.assign(gameList, resData.result)
  if (gameList.length === 0) {
    noResult = true
  }
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
  color: var(--primary-front);
  background-color: var(--primary);
  border-radius: 5px;
}

.selected-category {
  color: var(--primary-front);
  background-color: var(--primary);
  border-radius: 5px;
}

.list-pagination {
  li.is-active {
    color: var(--primary-front) !important;
  }
}
</style>