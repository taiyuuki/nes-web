<template>
  <div
    v-loading="isLoading"
    class="banner-cover"
  >
    <img
      v-show="!isLoading"
      :src="src"
      w="100%"
      transition="all-500"
      alt="item.title"
      display="block"
      m="auto"
      @load="loaded"
    >
    <div
      class="item-title"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string; title: string }>()
let isLoading = $ref(true)
function loaded() {
  isLoading = false
}
</script>

<style lang="scss">
.banner-cover {
  height: 100%;

  .item-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2px 5px;
    color: #000;
    font-size: 1.2rem;
    text-align: center;
    background-color: rgb(255 255 255 / 50%);
    transform: translateY(100%);
    transition: transform 500ms;
  }

  &:hover {
    .item-title {
      transform: translateY(0);
    }
  }
}
</style>