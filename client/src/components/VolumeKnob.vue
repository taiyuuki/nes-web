<script setup lang="ts">
const props = defineProps<{ gain: number }>()
const emits = defineEmits<VolumeKnobEmits>()
interface VolumeKnobEmits {
    (event: 'update:gain', gain: number): void
}

const circlePosition = computed(() => 100 - props.gain + 10)

let temp = toRaw(props.gain)
function emitGain(gain: number) {
    if (gain > 100) {
        gain = 100
    }
    if (gain <= 0) {
        gain = 0
        temp = 100
    }
    emits('update:gain', gain)
}

function volumeOff() {
    if (props.gain === 0) {
        emits('update:gain', temp === 0 ? 100 : temp)
    }
    else {
        temp = props.gain
        emits('update:gain', 0)
    }
}

function moveCircle(e: MouseEvent) {
    emitGain(props.gain - e.movementY)
    return false
}

function removeEvent() {
    document.removeEventListener('mousemove', moveCircle)
    document.removeEventListener('mouseup', removeEvent)
    document.onselectstart = () => true
    return false
}

function addDownEvent() {
    document.onselectstart = () => false
    document.addEventListener('mousemove', moveCircle)
    document.addEventListener('mouseup', removeEvent)
    return false
}

function stopDefaults(e: Event) {
    return e.preventDefault()
}

function setVolume(e: MouseEvent) {
    emitGain(100 - e.offsetY + 10)
}

defineExpose({ volumeOff })
</script>

<template>
  <div
    class="volume-knob"
    @mouseleave="removeEvent"
  >
    <div
      class="volume-icon"
      @click="volumeOff"
    >
      <IconInner
        v-if="props.gain > 0"
        icon="i-ic:round-volume-up"
      />
      <IconInner
        v-else
        icon="i-ic:round-volume-off"
      />
    </div>
    <div
      class="volume-box"
      draggable="false"
      @dragenter="stopDefaults"
      @dragover="stopDefaults"
    >
      <div
        h="20"
        text="center color-#fff"
      >
        {{ props.gain }}
      </div>
      <svg
        width="40px"
        height="120px"
      >
        <g>
          <line
            stroke-linecap="round"
            x1="20"
            y1="110"
            x2="20"
            y2="10"
            stroke-width="5"
            stroke="gray"
            pointer
            @click="setVolume"
          />

          <line
            stroke-linecap="round"
            x1="20"
            y1="110"
            x2="20"
            :y2="circlePosition"
            stroke-width="5"
            stroke="var(--primary)"
            pointer
            @click="setVolume"
          />

          <circle
            cx="20"
            :cy="circlePosition"
            r="5"
            fill="white"
            stroke="var(--primary)"
            pointer
            draggable="false"
            hover="shadow-var-primary-5"
            @mousedown="addDownEvent"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
.volume-knob {
  position: relative;

  .volume-box {
    position: absolute;
    right: -10px;
    bottom: 20px;
    display: none;
    width: 40px;
    height: 140px;
    background-color: rgb(0 0 0 / 50%);
    border-radius: 3px;

    &:hover {
      display: block;
    }
  }

  .volume-icon:hover {
    & ~ .volume-box {
      display: block;
    }
  }
}
</style>
