<template>
  <div
    v-loading="isLoading"
    w="100%"
  >
    <img
      v-show="!isLoading"
      ref="img"
      obj="cover"
      w="100%"
      display="block"
      m="x-auto y-0"
      :src="gameInfo.cover"
      :alt="gameInfo.tite"
      :title="gameInfo.title"
      draggable="false"
      @load="isLoading = false"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{ gameInfo: RomInfo }>()

const isLoading = $ref(true)
</script>