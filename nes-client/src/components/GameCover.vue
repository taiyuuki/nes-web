<template>
  <div
    ref="card"
    v-loading="isLoading"
    :style="`height: ${cardHeight}`"
  >
    <img
      v-show="!isLoading"
      ref="img"
      obj="cover"
      w="100%"
      display="block"
      m="x-auto y-0"
      :src="gameInfo.cover"
      :alt="gameInfo.title"
      :title="gameInfo.title"
      draggable="false"
      @load="loaded"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{ gameInfo: RomInfo }>()
const card = $ref<HTMLDivElement | null>(null)
let isLoading = $ref(true)
let cardHeight = $ref('auto')

function setCardHeight() {
  if (card && isLoading) {
    const { width } = getComputedStyle(card)
    cardHeight = (parseFloat(width) * 240 / 256) + 'px'
  }
  else {
    cardHeight = 'auto'
    window.removeEventListener('resize', setCardHeight)
  }
}

function loaded() {
  isLoading = false
  cardHeight = 'auto'
  window.removeEventListener('resize', setCardHeight)
}

onMounted(() => {
  setCardHeight()
  window.addEventListener('resize', setCardHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', setCardHeight)
})
</script>