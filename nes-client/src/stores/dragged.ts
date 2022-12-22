import { defineStore } from 'pinia'
export const useDragged = defineStore('dragged', { state: () => ({ target: document.createElement('div') }) })