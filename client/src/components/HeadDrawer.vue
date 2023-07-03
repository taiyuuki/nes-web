<template>
  <transition>
    <div
      pst="fix l-0 r-0 b-0 t-60"
      bg="color-var-theme"
      p="20"
      class="head-drawer"
    >
      <slot />
    </div>
  </transition>
</template>

<style lang="scss">
@keyframes show-drawer {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.v-enter-active {
  animation: show-drawer 0.3s;
}

.v-leave-active {
  animation: show-drawer 0.3s reverse;
}
</style>
