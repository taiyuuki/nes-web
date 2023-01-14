import type { Controller } from 'nes-vue'

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
    },
  }),
  getters: {
    maps: (state) => {
      const maps = {} as { [key: string]: string }
      const p1_keys = (<ObjectCustom>Object).keys(state.p1)
      const p2_keys = (<ObjectCustom>Object).keys(state.p1)
      const p0_keys = (<ObjectCustom>Object).keys(state.p0)
      p1_keys.forEach(key => {
        maps[state.p1[key] as string] = 'p1' + key
      })
      p2_keys.forEach(key => {
        maps[state.p2[key] as string] = 'p2' + key
      })
      p0_keys.forEach(key => {
        maps[state.p0[key] as string] = 'p0' + key
      })
      return maps
    },
  },
  persist: true,
})