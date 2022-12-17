import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss'

import { presetTaiyuuki } from '@taiyuuki/unocss-preset'
export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTaiyuuki(),
  ],
  variants: [],
})