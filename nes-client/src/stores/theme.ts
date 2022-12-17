import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', {
  state: () => ({ color: '#66ccff' }),
  actions: {
    setColor(color: string) {
      this.color = color
    },
  },
  persist: true,
})

export const useDark = defineStore('dark', {
  state: () => ({ value: false }),
  actions: {
    setDark() {
      this.value = !this.value
    },
  },
  persist: true,
})