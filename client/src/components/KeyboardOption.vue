<script setup lang="ts">
import { keys_1, keys_2, keys_3, keys_4, keys_5 } from 'src/options/keyboard'
</script>

<template>
  <div
    bg="color-#1a1e24"
    w="fit"
    border="radius-5"
    shadow="var-fcolor-2"
  >
    <div
      flex="row items-center"
      class="[&>div]:m-1"
      w="fit"
      p="1"
      border="radius-5"
    >
      <KeySquare
        v-for="keyPress in keys_1"
        :key="keyPress.code"
        :key-press="keyPress"
      />
    </div>
    <div
      flex="row items-center"
      class="[&>div]:m-1"
      w="fit"
      p="1"
      border="radius-5"
    >
      <KeySquare
        v-for="keyPress in keys_2"
        :key="keyPress.code"
        :key-press="keyPress"
      />
    </div>
    <div
      flex="row items-center"
      class="[&>div]:m-1"
      w="fit"
      p="1"
      border="radius-5"
    >
      <KeySquare
        v-for="keyPress in keys_3"
        :key="keyPress.code"
        :key-press="keyPress"
      />
    </div>
    <div
      flex="row items-center"
      class="[&>div]:m-1"
      w="fit"
      p="1"
      border="radius-5"
    >
      <KeySquare
        v-for="keyPress in keys_4"
        :key="keyPress.code"
        :key-press="keyPress"
      />
    </div>
    <div
      flex="row items-center"
      class="[&>div]:m-1"
      w="fit"
      p="1"
      border="radius-5"
    >
      <KeySquare
        v-for="keyPress in keys_5"
        :key="keyPress.code"
        :key-press="keyPress"
      />
    </div>
  </div>
</template>
