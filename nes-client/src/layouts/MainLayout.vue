<template>
  <el-container>
    <el-header class="flex-row items-center py-20 text-color-fcolor shadow-fcolor-1">
      <MainHeader />
    </el-header>
    <el-main class="100% lg:w-80% m-auto lg:w-min-1024">
      <RouterView />
    </el-main>
  </el-container>
</template>