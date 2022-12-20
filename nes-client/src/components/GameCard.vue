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
      :game-info="gameInfo"
    />
    <div
      m="t-10"
      flex="row justify-between"
    >
      <div text="14 ellipsis">
        {{ gameInfo.title }}
      </div>
      <div
        text="color-#fff 12"
        bg="color-var-primary"
        p="2"
        border="radius-2"
      >
        {{ gameInfo.type }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ gameInfo: RomInfo }>()
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