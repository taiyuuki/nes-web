<template>
  <div
    m="t-0 y-0 b-20"
    overflow="hidden"
    bg="bg"
    class="game-card"
    p="5"
    border="box"
    shadow="var-fcolor-1"
  >
    <GameCover
      :rom-info="romInfo"
    />
    <div
      m="t-10"
      flex="row justify-between"
    >
      <div text="14 ellipsis">
        {{ romInfo.title }}
      </div>
      <div
        text="color-var-primary-front 12"
        bg="color-var-primary"
        p="2"
        border="radius-2"
      >
        {{ romInfo.type }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ romInfo: RomInfo }>()
</script>