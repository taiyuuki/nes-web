<template>
  <div
    w="max-48%"
    shadow="var-fcolor-1"
    text="0"
  >
    <img
      :src="src"
      :alt="title"
      w="100%"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string; title: string }>()
</script>