<template>
  <div>
    <el-autocomplete
      ref="input"
      v-model="keyword"
      placeholder="搜索"
      :fetch-suggestions="getSuggestions"
      :trigger-on-focus="false"
      :debounce="500"
      @select="selectRom"
    >
      <template #default="{ item }">
        <div
          flex="row items-center"
          p="y-2"
        >
          <img
            v-if="item.cover !== ''"
            :src="item.cover"
            :alt="item.title"
            display-block
            h="40"
            w="40"
            title="item.value"
          >
          <div p="5">
            {{ item.value }}
          </div>
        </div>
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import { requestSuggestions } from 'src/axios'
import { pushToGamePlayer } from 'src/use/playgame'
import type { AutocompleteInstance } from 'element-plus'

let keyword = $ref('')
const input = $ref<AutocompleteInstance | null>(null)

async function getSuggestions(keyword: string, setSuggestions: (list: Suggestion[]) => void) {
  if (keyword.trim() === '') {
    return
  }
  const data = await requestSuggestions(keyword)
  if (data.code === 200) {
    setSuggestions(data.suggestions)
  }
  else {
    setSuggestions([{
      id: '0', cover: '', value: '没有符合的结果',
    }])
  }
}

function selectRom(item: Suggestion) {
  if (item.id !== '0') {
    pushToGamePlayer(item.id)
    keyword = ''
    if (input) {
      input.blur()
    }
  }
}
</script>

<style lang="scss">
.el-scrollbar__wrap {
  overscroll-behavior: contain;
}
</style>