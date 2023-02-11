<template>
  <footer
    bg="color-var-theme"
    shadow="var-fcolor-1"
    w="100vw"
    h="120"
    class="no-zpix"
  >
    <div
      flex="row items-center justify-center"
      m="t-10"
    >
      <div
        w="80"
        h="80"
      >
        <img
          w="100%"
          src="icons/apple-touch-icon.png"
          alt="icon"
        >
      </div>
      <div
        text="color-var-fcolor line-1.2em 12"
        p="y-5 x-15"
        class="[&>p]:m-y-5"
      >
        <p text="1.2rem bold">
          在线红白机游戏
        </p>
        <p>
          Copyright © {{ date }} <a
            href="https://github.com/taiyuuki"
            target="_blank"
          >Taiyuuki</a>
        </p>
        <p>
          项目地址：<a
            href="https://github.com/taiyuuki/nes-web"
            target="_blank"
          >Github</a>
        </p>
        <p>
          LICENSE: MIT
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
let date = '2023'
const now = new Date().getFullYear()
if (now > 2023) {
  date += ` - ${now}`
}
</script>