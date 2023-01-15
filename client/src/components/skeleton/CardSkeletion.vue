<template>
  <el-skeleton
    class="game-card m-t-20"
    animated
    :throttle="50"
  >
    <template #template>
      <el-skeleton-item
        variant="rect"
        class="p-b-90%"
      />
      <div
        flex="row items-center justify-between"
        m="t-10"
      >
        <el-skeleton-item
          variant="text"
          style="flex: 1; margin-right: 20px;"
        />
        <el-skeleton-item
          variant="text"
          style="width: 2em;"
        />
      </div>
    </template>
  </el-skeleton>
</template>