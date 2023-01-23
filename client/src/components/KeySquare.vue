<template>
  <div
    class="key-square"
    :style="`width:${keyPress.size}px`"
    :data-code="keyPress.code"
    @dragover="stopDefault"
    @drop="dropToTarget"
  >
    <div
      class="key-name"
      :style="`width:${keyPress.size - 5}px`"
      :data-code="keyPress.code"
      :data-name="keyPress.name"
    />
    <div
      v-if="keyPress.code in controler.maps"
      class="key-button"
      draggable="true"
      :data-key="controler.maps[keyPress.code]"
      :data-player="controler.maps[keyPress.code].substring(1, 2)"
      :title="keyPress.name"
      @dragstart="dragStart"
      @dragend="dragEnd"
    >
      {{ keyboardNameMaps[controler.maps[keyPress.code]] }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useControler } from 'stores/controler'
import { useDragged } from 'stores/dragged'
import { keyboardNameMaps } from 'src/options/keyboard'
import { isNotNull, stopDefault } from 'src/utils'
import type { ControllerKeys } from 'src/utils/types'

defineProps<{ keyPress: {
  code: string
  size: number
  name: string
} }>()
const controler = useControler()
const dragged = useDragged()

function dragStart(e: DragEvent) {
  const target = e.target as HTMLDivElement
  dragged.target = target
  if (target) {
    target.classList.add('key-dragging')
  }
}
function dragEnd(e: DragEvent) {
  const target = e.target as HTMLDivElement
  if (target) {
    target.classList.remove('key-dragging')
  }
}
function dropToTarget(e: DragEvent) {
  const target = e.target as HTMLDivElement
  if (isNotNull(target)) {
    const targetCode = target.dataset.code
    const targetMapKey = target.dataset.key
    const draggedMapKey = dragged.target.dataset.key
    if (isNotNull(draggedMapKey)) {
      const draggedPlayer = draggedMapKey.substring(0, 2) as Player
      const draggedKey = draggedMapKey.substring(2) as ControllerKeys
      if (isNotNull(targetCode)) {
        controler[draggedPlayer][draggedKey] = targetCode
      }
      else if (isNotNull(targetMapKey)) {
        const targetPlayer = targetMapKey.substring(0, 2) as Player
        const targetKey = targetMapKey.substring(2) as ControllerKeys
        const temp = controler[draggedPlayer][draggedKey] as string
        controler[draggedPlayer][draggedKey] = controler[targetPlayer][targetKey] as string
        controler[targetPlayer][targetKey] = temp
      }
    }
  }
  dragged.target = document.createElement('div')
}
</script>

<style lang="scss">
.key-square {
  position: relative;
  height: 38px;
  text-align: center;
  background: #7e818a;
  border-radius: 5px;

  .key-name {
    position: absolute;
    top: 0.5px;
    left: 2.5px;
    height: 32px;
    background: linear-gradient(#eee, #fcfafd);
    border-radius: 4px;

    &::after {
      color: #000;
      line-height: 32px;
      content: attr(data-name);
    }
  }

  .key-button {
    position: relative;
    width: 100%;
    height: 38px;
    margin: auto;
    color: var(--primary-front);
    font-weight: bold;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    background: var(--primary);
    border-radius: 5px;
    cursor: grabbing;

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 38px;
      color: var(--primary-front);
      font-size: 40px;
      transform: translateX(-50%) translateY(-50%);
      opacity: 0.3;
      content: attr(data-player);
    }
  }

  .key-dragging {
    opacity: 0.8;
  }
}
</style>