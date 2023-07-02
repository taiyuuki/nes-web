<script setup lang="ts">
import { isNotNull } from 'src/utils'

const props = defineProps<{ romInfo: RomInfo }>()
const card = ref<HTMLDivElement | null>(null)
const isLoading = ref(true)
const cardHeight = ref('auto')
const isHover = ref(false)
let timer: NodeJS.Timeout | undefined

function clear() {
    if (isNotNull(timer)) {
        clearTimeout(timer)
    }
}

function onHover() {
    if (!isLoading.value) {
        isHover.value = true
    }
}

function onLeave() {
    clear()
    isHover.value = false
}

watch(() => isHover.value, () => {
    clear()
    timer = setTimeout(() => {
        isLoading.value = isHover.value
        timer = void 0
    }, 200)
})

const image = computed(() => {
    return isHover.value ? props.romInfo.image : props.romInfo.cover
})

function setCardHeight() {
    if (card.value) {
        const { width } = getComputedStyle(card.value)
        cardHeight.value = (parseFloat(width) * 240 / 256) + 'px'
    }
}

function loaded() {
    clear()
    isLoading.value = false
}

onMounted(() => {
    setCardHeight()
    window.addEventListener('resize', setCardHeight)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', setCardHeight)
})
</script>

<template>
  <div
    ref="card.value"
    :style="`height: ${cardHeight}`"
    w="100%"
    pst="rel"
    @mouseenter="onHover"
    @mouseleave="onLeave"
  >
    <div
      v-if="isLoading"
      class="il"
      pst="abs t-0 l-0"
      w="100%"
      h="100%"
    >
      <InnerLoading
        class="h-100%"
      />
    </div>
    <img
      v-show="!isLoading"
      ref="img"
      obj="cover"
      w="100%"
      display="block"
      m="x-auto y-0"
      :src="image"
      :alt="romInfo.title"
      draggable="false"
      @load="loaded"
    >
  </div>
</template>
