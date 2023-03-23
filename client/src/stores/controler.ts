import type { Controller } from 'nes-vue'
import { getKeys, isNotEmptyString } from 'src/utils'

export const useControler = defineStore('controler', {
  state: () => ({
    p1: {
      UP: 'KeyW',
      DOWN: 'KeyS',
      LEFT: 'KeyA',
      RIGHT: 'KeyD',
      A: 'KeyK',
      B: 'KeyJ',
      C: 'KeyI',
      D: 'KeyU',
      SELECT: 'ShiftRight',
      START: 'Enter',
    } as Controller,
    p2: {
      UP: 'ArrowUp',
      DOWN: 'ArrowDown',
      LEFT: 'ArrowLeft',
      RIGHT: 'ArrowRight',
      A: 'Numpad2',
      B: 'Numpad1',
      C: 'Numpad5',
      D: 'Numpad4',
    } as Controller,
    p0: {
      SAVE: 'Digit1',
      LOAD: 'Digit2',
      PAUSE: 'KeyP',
      RESET: 'KeyR',
      SUSPEND: 'KeyV',
      CUT: 'Equal',
      FULL: 'KeyF',
    },
  }),
  getters: {
    maps: (state) => {
      const keyMaps = {} as Record<string, string>
      const p1_keys = getKeys(state.p1)
      const p2_keys = getKeys(state.p1)
      const p0_keys = getKeys(state.p0)
      p1_keys.forEach(key => {
        keyMaps[state.p1[key]] = 'p1' + key
      })
      p2_keys.forEach(key => {
        keyMaps[state.p2[key]] = 'p2' + key
      })
      p0_keys.forEach(key => {
        keyMaps[state.p0[key]] = 'p0' + key
      })
      return keyMaps
    },
    gamepad_btns: (state) => {
      return {
        p1: [
          state.p1.A,
          state.p1.C,
          state.p1.B,
          state.p1.D,
          '',
          '',
          '',
          '',
          state.p1.SELECT,
          state.p1.START,
          '',
          '',
          state.p1.UP,
          state.p1.DOWN,
          state.p1.LEFT,
          state.p1.RIGHT,
        ],
        p2: [
          state.p2.A,
          state.p2.C,
          state.p2.B,
          state.p2.D,
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          state.p2.UP,
          state.p2.DOWN,
          state.p2.LEFT,
          state.p2.RIGHT,
        ],
      }
    },
  },
  actions: {
    keydown(player: Player, bindex: number) {
      const keyCode = this.gamepad_btns[player][bindex]
      if (isNotEmptyString(keyCode)) {
        document.dispatchEvent(new KeyboardEvent('keydown', { code: keyCode }))
      }
    },
    keyup(player: 'p1' | 'p2', bindex: number) {
      const keyCode = this.gamepad_btns[player][bindex]
      if (isNotEmptyString(keyCode)) {
        document.dispatchEvent(new KeyboardEvent('keyup', { code: keyCode }))
      }
    },
  },
  persist: true,
})