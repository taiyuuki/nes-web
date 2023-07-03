<script setup lang="ts">
import { useTheme, useDark } from 'stores/theme'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { getContrastColor } from 'src/utils'
import { searchGames } from 'src/router/playgame'
import { useMobile } from 'src/composables/mobile'

const theme = useTheme()
const dark = useDark()
const isDark = ref(dark.value)
const showDrawer = ref(false)
const isMobile = useMobile()
const router = useRouter()
router.beforeEach(() => {
    showDrawer.value = false
})

theme.$subscribe(() => {
    if (theme.color === null) {
        return
    }
    setTheme(theme.color)
})

function setTheme(color: string) {
    document.body.setAttribute('style', `--el-color-primary: ${color}; --primary: ${color}; --primary-front: ${getContrastColor(color)}`,)
}

function setDark(val: boolean | string | number) {
    dark.value = val as boolean
    if (dark.value) {
        document.documentElement.classList.add('dark')
    }
    else {
        document.documentElement.classList.remove('dark')
    }
}

function pullDrawer() {
    showDrawer.value = !showDrawer.value
}

onMounted(() => {
    setTheme(theme.color)
    setDark(dark.value)
})
</script>

<template>
  <HeadDrawer v-show="showDrawer">
    <div text="center">
      <router-link
        to="/"
        class="m-y-30 pointer display-block"
        exact-active-class="text-color-var-primary"
      >
        首页
      </router-link>
      <router-link
        to="/gamelist"
        class="m-y-30 pointer display-block"
        exact-active-class="text-color-var-primary"
      >
        游戏列表
      </router-link>
    </div>
    <div
      m="t-20"
      text="center"
      w="100%"
    >
      <SearchInput
        class="m-y-10"
        @search="searchGames"
      />
    </div>
    <div
      m="t-50"
      text="center"
      w="100%"
    >
      <el-color-picker
        v-model="theme.color"
        color-format="hex"
        size="small"
        class="pointer"
      />
      <el-switch
        v-model="isDark"
        :active-icon="Moon"
        :inactive-icon="Sunny"
        class="m-l-10 pointer"
        @change="setDark"
      />
    </div>
  </HeadDrawer>
  <el-page-header
    v-if="isMobile"
    icon=""
    class="w-100% lg:w-80% m-auto lg:w-min-1024"
  >
    <template #title>
      <router-link
        to="/"
      >
        <img
          src="logo.png"
          alt="LOGO"
          h="46"
          m="t-8"
        >
      </router-link>
    </template>
    <template #extra>
      <div
        class="i-ic:outline-menu"
        @click="pullDrawer"
      />
    </template>
  </el-page-header>
  <el-page-header
    v-else
    icon=""
    class="w-100% lg:w-80% m-auto lg:w-min-1024"
  >
    <template #title>
      <router-link
        to="/"
      >
        <img
          src="logo.png"
          alt="LOGO"
          h="46"
          m="t-8"
        >
      </router-link>
    </template>
    <template #content>
      <div
        flex="row items-center justify-start"
      >
        <router-link
          to="/"
          class="m-x-10 pointer"
          exact-active-class="text-color-var-primary"
        >
          首页
        </router-link>
        <router-link
          to="/gamelist"
          class="m-x-10 pointer"
          exact-active-class="text-color-var-primary"
        >
          游戏列表
        </router-link>
        <SearchInput
          class="m-x-10"
          @search="searchGames"
        />
      </div>
    </template>
    <template #extra>
      <div class="theme">
        <el-color-picker
          v-model="theme.color"
          color-format="hex"
          size="small"
          class="pointer"
        />
        <el-switch
          v-model="isDark"
          :active-icon="Moon"
          :inactive-icon="Sunny"
          class="m-l-10 pointer"
          @change="setDark"
        />
      </div>
    </template>
  </el-page-header>
</template>

<style lang="scss">
.main-header {
  .logo {
    width: 120px;
  }

  .theme {
    display: flex;
    align-items: center;

    & > div {
      margin: 0 10px;
    }
  }

  .el-switch {
    --el-switch-on-color: #2b333e;
    --el-switch-of-color: #f8f4ed;
  }

  .el-menu {
    --el-menu-active-color: var(--el-color-primary);
    --el-menu-hover-text-color: var(--el-color-primary);
  }
}
</style>
