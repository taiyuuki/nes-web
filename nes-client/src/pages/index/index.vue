<template>
  <div>
    <div
      v-for="(value, key) in category"
      :key="key"
      @click="getGameList(key)"
    >
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { requestCategory, requestGameList } from 'src/axios'

useHead(() => {
  return { title: '首页 - 在线FC游戏' }
})

const category = reactive({})
const gameList = reactive<RomInfo[]>([])
async function getGameList(key: string) {
  Object.assign(gameList, await requestGameList({
    cat: key,
    publisher: '',
    keyword: '',
    page: 1,
    limit: 20,
  }))
}

onMounted(async () => {
  Object.assign(category, await requestCategory())
  getGameList('')
})
</script>