<template>
  <div
    :class="icon"
    w="20"
    h="20"
    text="color-#fff hover:color-var-primary"
    pointer
  />
</template>

<script setup lang="ts">
defineProps<{ icon: string }>()
</script>