<template>
  <el-container>
    <el-header class="flex-row items-center p-y-20 shadow-var-fcolor-1">
      <MainHeader />
    </el-header>
    <el-main class="w-100% lg:w-80% m-auto lg:w-min-1024">
      <RouterView />
    </el-main>
  </el-container>
</template>