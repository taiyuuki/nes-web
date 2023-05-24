<script setup lang="ts">
</script>

<template>
  <div
    middle="out before:before"
  >
    <div class="middle-inner">
      <div class="loading">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  width: 18px;
  height: 18px;
  color: var(--primary);
  font-size: 0;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  position: absolute;
  display: inline-block;
  float: none;
  width: 6px;
  height: 6px;
  background-color: currentcolor;
  border: 0 solid currentcolor;
  border-radius: 0;
  transform: translate(100%, 100%);
  opacity: 0;
  animation: ball-8bits 1s 0s ease infinite;
}

.loading > div:nth-child(1) {
  top: -100%;
  left: 0;
  animation-delay: -0.9375s;
}

.loading > div:nth-child(2) {
  top: -100%;
  left: 33.3333%;
  animation-delay: -0.875s;
}

.loading > div:nth-child(3) {
  top: -66.6667%;
  left: 66.6667%;
  animation-delay: -0.8125s;
}

.loading > div:nth-child(4) {
  top: -33.3333%;
  left: 100%;
  animation-delay: -0.75s;
}

.loading > div:nth-child(5) {
  top: 0;
  left: 100%;
  animation-delay: -0.6875s;
}

.loading > div:nth-child(6) {
  top: 33.3333%;
  left: 100%;
  animation-delay: -0.625s;
}

.loading > div:nth-child(7) {
  top: 66.6667%;
  left: 66.6667%;
  animation-delay: -0.5625s;
}

.loading > div:nth-child(8) {
  top: 100%;
  left: 33.3333%;
  animation-delay: -0.5s;
}

.loading > div:nth-child(9) {
  top: 100%;
  left: 0;
  animation-delay: -0.4375s;
}

.loading > div:nth-child(10) {
  top: 100%;
  left: -33.3333%;
  animation-delay: -0.375s;
}

.loading > div:nth-child(11) {
  top: 66.6667%;
  left: -66.6667%;
  animation-delay: -0.3125s;
}

.loading > div:nth-child(12) {
  top: 33.3333%;
  left: -100%;
  animation-delay: -0.25s;
}

.loading > div:nth-child(13) {
  top: 0;
  left: -100%;
  animation-delay: -0.1875s;
}

.loading > div:nth-child(14) {
  top: -33.3333%;
  left: -100%;
  animation-delay: -0.125s;
}

.loading > div:nth-child(15) {
  top: -66.6667%;
  left: -66.6667%;
  animation-delay: -0.0625s;
}

.loading > div:nth-child(16) {
  top: -100%;
  left: -33.3333%;
  animation-delay: 0s;
}

@keyframes ball-8bits {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  51% {
    opacity: 0;
  }
}
</style>
