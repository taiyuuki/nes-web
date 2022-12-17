<template>
  <div flex="row">
    <nes-vue
      ref="nes"
      :url="current.game.url"
      width="512"
      height="480"
      debugger
    />
  </div>
</template>

<script setup lang="ts">
import { NesVue } from 'nes-vue'
import { api } from 'src/axios'
import { useCurrentGame } from 'src/stores/current'

const gamelist = reactive<GameInfo[]>([])
const current = useCurrentGame()
api.get('/all').then(({ data }) => {
  console.log(data.result[0])
  Object.assign(gamelist, data.result)
})
</script>