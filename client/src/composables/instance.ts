import type { Ref } from 'vue'

export const useInstance = <T extends abstract new (...args: any[]) => any>() => ref() as Ref<InstanceType<T>>

export const useELement = <T extends HTMLElement>() => ref() as Ref<T>
