<template>
  <div
    m="t-0 y-0 b-20"
    overflow="hidden"
    bg="bg"
    :style="`height: ${cardHeight}`"
    class="game-card"
  >
    <GameCover :game-info="gameInfo" />
    <div m="t-10">
      <div text="color-var-primary 14 ellipsis">
        {{ gameInfo.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ gameInfo: RomInfo; cardHeight: string }>(), { cardHeight: 'auto' })
</script>

<style lang="scss">
.game-card {
  flex: 0 0 24%;

  .list-desc {
    .q-item {
      padding: 0;

      .q-item__section--side {
        padding-right: 5px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .game-card {
    flex: 0 0 32%;
  }
}

@media screen and (max-width: 768px) {
  .game-card {
    flex: 0 0 49%;
  }
}

@media screen and (max-width: 599px) {
  .game-card {
    flex: 0 0 100%;
  }
}
</style>