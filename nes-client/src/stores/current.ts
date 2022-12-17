import { defineStore } from 'pinia'

export const useCurrentGame = defineStore('current', { state: () => ({ game: {} as RomInfo }) })