import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import unocss from 'unocss/vite'
import autoAPIs from 'unplugin-auto-import/vite'
import autoComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver as elementPlus } from 'unplugin-vue-components/resolvers'
import { VitePWA as pwa } from 'vite-plugin-pwa'

function resolve(dir: string) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve('src'),
      'src': resolve('src'),
      'components': resolve('src/components'),
      'layouts': resolve('src/layouts'),
      'pages': resolve('src/pages'),
      'router': resolve('src/router'),
      'stores': resolve('src/stores'),
    },
  },
  plugins: [
    vue({ reactivityTransform: true }),
    unocss(),
    pages({
      extensions: ['vue'],
      extendRoute(route) {
        return {
          ...route,
          meta: { auth: true },
        }
      },
    }),
    layouts({ defaultLayout: 'MainLayout' }),
    autoComponents({
      dts: 'src/components.d.ts',
      resolvers: [elementPlus()],
    }),
    autoAPIs({
      imports: [
        'vue',
        'pinia',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
      ],
      dts: 'src/auto-imports.d.ts',
      resolvers: [elementPlus()],
    }),
    pwa({
      registerType: 'autoUpdate',
      includeAssets: ['icons/safari-pinned-tab.svg'],
      manifest: {
        name: '在线红白机游戏',
        short_name: '在线NES游戏',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: 'icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png',
          },
          {
            src: 'icons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: 'icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
})