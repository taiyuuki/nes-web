<script setup lang="ts">
defineProps<{ icon: string; label: string }>()
</script>

<template>
  <div
    w="29%"
    m="1%"
    text="color-#fff"
    active="text-var-primary"
    border="box"
  >
    <div
      :class="icon"
      w="40"
      h="40"
      pointer
    />
    <div
      m="2px"
      text="white center bold"
      border="box"
    >
      {{ label }}
    </div>
  </div>
</template>
