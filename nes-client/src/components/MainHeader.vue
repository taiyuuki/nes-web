<template>
  <el-page-header
    :icon="null"
    class="w-100% main-header"
  >
    <template #title>
      <a
        href="https://element-plus.gitee.io/zh-CN/"
        target="_blank"
        display="none md:block"
      >
        <img
          src="element-plus-logo.svg"
          alt="element-plus-logo"
          class="logo"
        >
      </a>
    </template>
    <template #content>
      <div
        flex="row items-center justify-start"
      >
        <router-link
          to="/"
          class="m-x-10"
          exact-active-class="text-color-var-primary"
          display="none md:block"
        >
          首页
        </router-link>
        <router-link
          to="/gamelist"
          class="m-x-10"
          exact-active-class="text-color-var-primary"
          display="none md:block"
        >
          游戏列表
        </router-link>
        <SearchInput class="m-x-10" />
      </div>
    </template>
    <template #extra>
      <div class="theme">
        <el-color-picker
          v-model="theme.color"
          show-alpha
          color-format="hex"
          size="small"
        />
        <el-switch
          v-model="isDark"
          :active-icon="Moon"
          :inactive-icon="Sunny"
          @change="setDark"
        />
      </div>
    </template>
  </el-page-header>
</template>

<script setup lang="ts">
import { useTheme, useDark } from 'stores/theme'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { getContrastColor } from 'src/utils'

const theme = useTheme()
const dark = useDark()
const isDark = $ref(dark.value)

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