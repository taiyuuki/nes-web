export const useCurrentGame = defineStore('current', {
    state: () => ({
        game: {} as RomInfo,
        fromRouter: false,
        gain: 100,
        refresh: true,
    }),
    actions: {
        suspend() {
            this.gain = 0
        },
    },
    persist: true,
})
