<template>
  <RouterView :key="$route.fullPath" />
</template>

<script setup lang="ts">
useHead(() => {
  return { title: '首页 - 在线红白机游戏' }
})
</script>

<style lang="scss">
.game-list {
  > div:nth-child(n) {
    margin-left: calc(4% / 3);
  }

  > div:nth-child(4n + 1) {
    margin-left: 0;
  }
}

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

@media screen and (max-width: 1024px) {
  .game-list {
    > div:nth-child(n) {
      margin-left: 2%;
    }

    > div:nth-child(3n + 1) {
      margin-left: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .game-list {
    > div:nth-child(n) {
      margin-left: 2%;
    }

    > div:nth-child(2n + 1) {
      margin-left: 0;
    }
  }
}

@media screen and (max-width: 599px) {
  .game-list {
    > div:nth-child(n) {
      margin-left: 0;
    }
  }
}
</style>