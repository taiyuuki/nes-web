<script setup lang="ts">
defineProps<{
    name: string
}>()

const emits = defineEmits(['down', 'up'])

const nbtnClass = ref({
    'o-btn': true,
    'o-btn--active': false,
})

function start() {
    nbtnClass.value['o-btn--active'] = true
    emits('down')
}

function end() {
    nbtnClass.value['o-btn--active'] = false
    emits('up')
}
</script>

<template>
  <div
    w="80"
    h="30"
    text="20 line-30 center"
    bg="white"
    :data-name="name"
    :class="nbtnClass"
    @touchstart="start"
    @touchend="end"
  />
</template>

<style lang="scss">
.o-btn {
  opacity: 0.25;

  &::after {
    color: #000;
    content: attr(data-name);
  }
}

.o-btn--active {
  opacity: 0.5;
  scale: 1.2;
}
</style>
