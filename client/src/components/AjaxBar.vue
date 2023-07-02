<script lang="ts">
import { inc } from 'src/utils'

interface StackEntry {
    start: Function
    stop: Function
}

const xhr = XMLHttpRequest
const open = xhr.prototype.open
let speed: number
let timer: number | null
let sessions = 0

let stack: StackEntry[] = []
let highjackCount = 0
function highjackAjax(stackEntry: StackEntry) {
    stack.push(stackEntry)
    highjackCount++
    if (highjackCount > 1) { return }

    xhr.prototype.open = function (method, url) {
        const stopStack: Function[] = []

        const loadStart = () => {
            if (`${url}`.indexOf('suggestions') === -1) {
                stack.forEach(entry => {
                    entry.start()
                    stopStack.push(entry.stop)
                })
            }
        }

        const loadEnd = () => {
            stopStack.forEach(stop => { stop() })
        }

        this.addEventListener('loadstart', loadStart, { once: true })
        this.addEventListener('loadend', loadEnd, { once: true })

        open.apply(this, [method, url, true])
    }
}
</script>

<script setup lang="ts">
const progress = ref(0)
const onShow = ref(true)
const animate = ref(true)
const style = computed(() => {
    return { transform: `translate3d(${(progress.value - 100)}%,${onShow.value ? 0 : -200}%,0)` }
})

function start(newSpeed = 300) {
    const oldSpeed = speed
    speed = Math.max(0, newSpeed) || 0
    sessions++
    if (sessions > 1) {
        if (oldSpeed === 0 && newSpeed > 0) {
            planNextStep()
        }
        else if (timer !== null && oldSpeed > 0 && newSpeed <= 0) {
            clearTimeout(timer)
            timer = null
        }

        return sessions
    }

    timer !== null && clearTimeout(timer)

    if (onShow.value !== true) {
        progress.value = 0
        animate.value = false
    }

    timer = window.setTimeout(() => {
        onShow.value = true
        animate.value = true
        timer = null
        newSpeed > 0 && planNextStep()
    }, 300)

    return sessions
}

function stop() {
    sessions = Math.max(0, sessions - 1)
    if (sessions > 0) {
        return sessions
    }

    if (timer !== null) {
        clearTimeout(timer)
        timer = null
    }

    const end = () => {
        animate.value = true
        progress.value = 100
        timer = window.setTimeout(() => {
            timer = null
            onShow.value = false
        }, 300)
    }
    timer = window.setTimeout(end, 300)

    return sessions
}

function increment(amount?: number) {
    if (sessions > 0) {
        progress.value = inc(progress.value, amount)
    }

    return sessions
}

function planNextStep() {
    if (progress.value < 100) {
        timer = window.setTimeout(() => {
            timer = null
            increment()
            planNextStep()
        }, speed)
    }
}

function restoreAjax(start: Function) {
    stack = stack.filter(entry => entry.start !== start)

    highjackCount = Math.max(0, highjackCount - 1)
    if (highjackCount === 0) {
        xhr.prototype.open = open
    }
}

let hijacked: boolean
onMounted(() => {
    hijacked = true
    highjackAjax({ start, stop })
})

onBeforeUnmount(() => {
    timer !== null && clearTimeout(timer)
    hijacked === true && restoreAjax(start)
})
</script>

<template>
  <div
    bg="color-var-primary"
    h="3"
    pst="fix l-0 r-0 t-0"
    w="100%"
    z-index="2000"
    :transition="animate ? 'transform' : 'none'"
    :style="style"
  />
</template>
