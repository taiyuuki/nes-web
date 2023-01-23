import type { Controller } from 'nes-vue'
import { getKeys } from 'src/utils'

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
      const maps = {} as Record<string, string>
      const p1_keys = getKeys(state.p1)
      const p2_keys = getKeys(state.p1)
      const p0_keys = getKeys(state.p0)
      p1_keys.forEach(key => {
        maps[state.p1[key]] = 'p1' + key
      })
      p2_keys.forEach(key => {
        maps[state.p2[key]] = 'p2' + key
      })
      p0_keys.forEach(key => {
        maps[state.p0[key]] = 'p0' + key
      })
      return maps
    },
  },
  persist: true,
})