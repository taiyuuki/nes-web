<template>
  <el-container class="h-min-100vh">
    <el-header class="flex-row items-center p-y-20 bg-color-var-theme shadow-var-fcolor-1 pst-fix pst-t-0 w-100vw z-index-60">
      <MainHeader />
    </el-header>
    <el-main class="w-100% lg:w-80% m-x-auto m-t-60 lg:w-min-1024">
      <RouterView />
    </el-main>
    <MainFooter />
  </el-container>
</template>
