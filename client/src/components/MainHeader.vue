<script setup lang="ts">
import { useTheme, useDark } from 'stores/theme'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { getContrastColor } from 'src/utils'
import { searchGames } from 'src/router/playgame'

const theme = useTheme()
const dark = useDark()
const isDark = ref(dark.value)

theme.$subscribe(() => {
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

onMounted(() => {
    setTheme(theme.color)
    setDark(dark.value)
})
</script>

<template>
  <el-page-header
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
          display="none md:block"
        >
          首页
        </router-link>
        <router-link
          to="/gamelist"
          class="m-x-10 pointer"
          exact-active-class="text-color-var-primary"
          display="none md:block"
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
