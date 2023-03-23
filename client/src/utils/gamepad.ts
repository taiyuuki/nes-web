import { getFiler } from 'src/utils'

type BtnCallback = (player: Player, index: number) => void

// 摇杆灵敏度 [0, 1]， 值越低灵敏度越高。
const THRESHOLD = 0.3

// 数组填充false
function fillFalse(len: number) {
  return Array.from<boolean>({ length: len }).fill(false)
}

class Gamepad {
  animationFrame: number// 用于清除帧动画
  axesHolding: Record<Player, boolean[]>// 收集摇杆长按
  btnHolding: Record<Player, boolean[]>// 收集按钮长按
  keydown: BtnCallback// 按下回调
  keyup: BtnCallback// 弹起回调
  
  constructor() {
    window.addEventListener('gamepadconnected', this.connectHandler.bind(this, true))
    window.addEventListener('gamepaddisconnected', this.connectHandler.bind(this, false))
    this.animationFrame = requestAnimationFrame(this.frame.bind(this))
    this.btnHolding = {
      p1: fillFalse(20),
      p2: fillFalse(20),
    }
    this.axesHolding = {
      p1: fillFalse(4),
      p2: fillFalse(4),
    }
    this.keydown = () => false
    this.keyup = () => false
  }

  get gamepads() {
    return getFiler(navigator.getGamepads())
  }

  // 设置按钮回调函数
  setCallback(onKeydown: BtnCallback, onKeyup: BtnCallback) {
    this.keydown = onKeydown
    this.keyup = onKeyup
  }

  // 连接或断开手柄
  connectHandler(state: boolean, e: GamepadEvent) {
    if (state) {
      this.gamepads[e.gamepad.index] = e.gamepad
    }
    else if (this.gamepads.length === 0) {
      this.close()
    }
  }

  // 推动摇杆
  axesHandler(player: Player, check: boolean, aindex: number, bindex: number) {
    const hold = this.axesHolding[player]?.[aindex]
    if (check) {
      if (!hold) {
        this.keydown(player, bindex)
        this.axesHolding[player][aindex] = true
      }
    }
    else if (hold) {
      this.keyup(player, bindex)
      this.axesHolding[player][aindex] = false
    }
  }

  // 按下按钮
  btnHandler(player: Player, btn: GamepadButton, bindex: number) {
    const hold = this.btnHolding[player]?.[bindex]
    if (btn.pressed) {
      if (hold) {
        return
      }
      this.btnHolding[player][bindex] = true
      this.keydown(player, bindex)
    }
    else if (hold) {
      this.btnHolding[player][bindex] = false
      this.keyup(player, bindex)
    }
  }

  // 运行手柄
  run() {
    for (let gindex = 0; gindex < this.gamepads.length; gindex++) {
      // 支持两个手柄
      if (gindex > 1) {
        break
      }
      const player = `p${gindex + 1}` as Player
      const gamepad = this.gamepads[gindex]

      gamepad.buttons.forEach(this.btnHandler.bind(this, player))

      const lr = gamepad.axes[0]
      const tb = gamepad.axes[1]

      this.axesHandler(player, lr > THRESHOLD, 0, 15)
      this.axesHandler(player, lr < -THRESHOLD, 1, 14)
      this.axesHandler(player, tb > THRESHOLD, 2, 13)
      this.axesHandler(player, tb < -THRESHOLD, 3, 12)
    }
  }

  // 开启帧动画
  frame() {
    this.run()
    cancelAnimationFrame(this.animationFrame)
    this.animationFrame = requestAnimationFrame(this.frame.bind(this))
  }

  // 清除帧动画
  close() {
    this.btnHolding.p1.fill(false)
    this.btnHolding.p2.fill(false)
    cancelAnimationFrame(this.animationFrame)
  }
}

export function useGamepad() {
  return new Gamepad()
}