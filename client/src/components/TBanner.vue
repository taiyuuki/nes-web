<script setup lang="ts">
import { requestBanner } from 'src/axios'
import { pushToGamePlayer } from 'router/playgame'

const banner = reactive<{ id: string; title: string; image: string }[]>([])
const isGettingBanner = computed(() => banner.length === 0)
const active = ref(0)

function getActive(cur: number) {
    active.value = cur
}

function clickItem(i: number, id: string) {
    if (active.value === i) {
        pushToGamePlayer(id)
    }
}

onMounted(async () => {
    const data = await requestBanner()
    Object.assign(banner, data.banner)
})
</script>

<template>
  <el-carousel
    :interval="4000"
    class="flex-1 overflow-hidden tbanner"
    type="card"
    height="480px"
    @change="getActive"
  >
    <template v-if="isGettingBanner">
      <el-carousel-item
        v-for="i in 3"
        :key="i"
        class="text-0 item"
      >
        <BannerSkeletion />
      </el-carousel-item>
    </template>
    <el-carousel-item
      v-for="(item, i) in banner"
      :key="item.id"
      class="text-0"
      :label="item.title"
      @click="clickItem(i, item.id)"
    >
      <BannerCover
        :src="item.image"
        :title="item.title"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="scss">
.tbanner {
  $width: 30px;
  $height: 100px;
  $corner: 12px;

  .el-carousel__arrow {
    width: $width;
    height: $height;
    color: #000;
    background-color: #fff;
    border-radius: 0;
    opacity: 0.5;

    &:hover {
      opacity: 0.9;
    }
  }

  .el-carousel__arrow--right {
    $clip-right: polygon(
      $width 0,
      $width $height,
      0 $height - $corner,
      0 $corner
    );

    right: 0;
    clip-path: $clip-right;
  }

  .el-carousel__arrow--left {
    $clip-left: polygon(
      0 0,
      $width $corner,
      $width $height - $corner,
      0 $height
    );

    left: 0;
    clip-path: $clip-left;
  }

  .el-carousel__mask {
    background-color: transparent;
  }

  .el-carousel__indicators--outside {
    button {
      color: var(--fcolor);
      background-color: var(--theme);
      box-shadow: 0 0 1px var(--fcolor);
    }

    .is-active {
      button {
        color: var(--primary-front);
        background-color: var(--primary);
      }
    }
  }
}
</style>
