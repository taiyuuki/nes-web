<template>
  <div
    flex="row"
    w="100%"
    pointer
    pst="rel"
    m="y-5"
    p="2"
    bg="color-var-theme"
    hover="bg-color-var-primary text-color-var-primary-front"
  >
    <div
      w="64"
      h="60"
      text="0"
    >
      <img
        :src="romInfo.cover"
        :alt="romInfo.title"
        w="64"
      >
    </div>
    <div p="5">
      <p>{{ romInfo.title }}</p>
      <p
        opacity="0.5"
        text="0.5rem"
        pst="abs r-5 b-5"
      >
        {{ romInfo.publisher }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ romInfo: RomInfo }>()
</script>