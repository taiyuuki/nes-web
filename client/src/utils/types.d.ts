import type { Controller } from "nes-vue"

export type ControllerKeys = Exclude<keyof Controller, 'SELECT' | 'START'>