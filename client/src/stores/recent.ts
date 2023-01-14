export const useRecent = defineStore('recent', {
  state: () => ({ list: [] as RomInfo[] }),
  persist: true,
})