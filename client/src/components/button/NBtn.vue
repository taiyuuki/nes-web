<script setup lang="ts">
defineProps<{
    name: string
}>()

const emits = defineEmits(['down', 'up'])

const nbtnClass = ref({
    'n-btn': true,
    'n-btn--active': false,
})

function start() {
    nbtnClass.value['n-btn--active'] = true
    emits('down')
}

function end() {
    nbtnClass.value['n-btn--active'] = false
    emits('up')
}
</script>

<template>
  <div
    w="50"
    h="50"
    text="20 line-50 center"
    bg="white"
    border="radius-50%"
    :data-name="name"
    :class="nbtnClass"
    @touchstart="start"
    @touchend="end"
  />
</template>

<style lang="scss">
.n-btn {
  opacity: 0.25;

  &::after {
    color: #000;
    content: attr(data-name);
  }
}

.n-btn--active {
  opacity: 0.5;
  scale: 1.2;
}
</style>
