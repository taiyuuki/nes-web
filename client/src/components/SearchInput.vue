<script setup lang="ts">
import { requestSuggestions } from 'src/axios'
import { pushToGamePlayer } from 'src/router/playgame'
import type { AutocompleteInstance } from 'element-plus'
import { isNotNull } from 'src/utils'

interface SearchInputEmits {
    (e: 'search', keyword: string): void
}

const emits = defineEmits<SearchInputEmits>()

let keyword = $ref('')
const elInput = $ref<AutocompleteInstance | null>(null)

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

function clearInput() {
    keyword = ''
    if (isNotNull(elInput)) {
        elInput.blur()
        elInput.close()
    }
}

function selectRom(item: Suggestion) {
    if (item.id !== '0') {
        pushToGamePlayer(item.id)
        clearInput()
    }
}

function onSearch() {
    emits('search', keyword.trim())
    clearInput()
}

function onEnter(e: KeyboardEvent) {
    if (e.code === 'Enter') {
        onSearch()
    }
}
</script>

<template>
  <div>
    <el-autocomplete
      ref="elInput"
      v-model="keyword"
      placeholder="搜索"
      :fetch-suggestions="getSuggestions"
      :trigger-on-focus="false"
      :debounce="500"
      @select="selectRom"
      @keypress="onEnter"
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
      <template #suffix>
        <div
          w="25"
          h="25"
          pointer
          text="hover:color-var-primary"
          class="i-fluent-emoji-high-contrast:magnifying-glass-tilted-left"
          @click="onSearch"
        />
      </template>
    </el-autocomplete>
  </div>
</template>

<style lang="scss">
.el-scrollbar__wrap {
  overscroll-behavior: contain;
}
</style>
