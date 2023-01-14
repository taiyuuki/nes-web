<template>
  <div
    :class="icon"
    w="36"
    h="36"
    text="color-var-fcolor hover:color-var-primary"
    pointer
  />
</template>

<script setup lang="ts">
defineProps<{ icon: string }>()
</script>