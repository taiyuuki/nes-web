<template>
  <div>
    <div text="bold 1.4rem">
      <span
        v-if="isSearching"
        opacity="0.8"
        class="no-zpix"
      >
        搜索： {{ keyword }}
      </span>
      <span v-else>
        游戏列表
      </span>
      <span
        v-if="total > 0"
        text="1rem"
      >
        （{{ total }}）
      </span>
    </div>
    <el-skeleton
      v-if="isGettingCategorys"
      animated
      style=" margin: 20px 0;"
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
          :class="{ 'selected-category': category === '' }"
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
            'selected-category': item.id === category,
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
    v-model:current-page="page"
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
import { pushToGamePlayer } from 'src/router/playgame'
import { config } from 'src/client.config'
import { isNotNull } from 'src/utils'

const { query } = useRoute()

const categorys = reactive<Category[]>([])
const gameList = reactive<RomInfo[]>([])
const current = useCurrentGame()
let page = $ref(1)
let total = $ref(0)
let category = $ref('')
let keyword = $ref('')
let noResult = $ref(false)

const isSearching = $computed(() => isNotNull(query.keyword))
const isGettingCategorys = $computed(() => categorys.length === 0)
const isGettingGameList = $computed(() => gameList.length === 0)

const title = $computed(() => (isSearching ? `搜索：${query.keyword}` : '游戏列表') + ' - 在线红白机游戏')
useHead({ title })

if (isSearching) {
  keyword = query.keyword as string
}

async function getGameList(key?: string) {
  if (noResult) {
    noResult = false
  }
  if (isNotNull(key)) {
    page = 1
    category = key
  }
  gameList.length = 0
  const resData = await requestGameList({
    cat: category,
    keyword,
    page: page,
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

watch(() => page, () => {
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