<script setup lang="ts">
/**
 * 后续会添加连发功能，目前只能靠外部自己实现，实现思路是：按键的键盘事件是绑定在document上的，连发键调用计时器连续触发已有的按键。
 */
let timeout: NodeJS.Timeout
// 创建按键J的键盘事件
const jDown = new KeyboardEvent('keydown', { code: 'KeyW' })
const jUp = new KeyboardEvent('keyup', { code: 'KeyW' })
document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyU') {
        const isDown = true
        timeout = setInterval(() => {
            if (isDown) {
                document.dispatchEvent(jDown)
            }
            else {
                document.dispatchEvent(jUp)
            }
        }, 40)
    }
})
document.addEventListener('keyup', (e) => {
    if (e.code === 'KeyU') {
        clearInterval(timeout)
    }
})
</script>
