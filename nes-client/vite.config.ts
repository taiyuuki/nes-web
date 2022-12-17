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
      extensions: ['vue', 'md'],
      extendRoute(route) {
        if (route.path === '/') {
        // Index is unauthenticated.
          return route
        }
        // Augment the route with meta that indicates that the route requires authentication.
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
      ],
      dts: 'src/auto-imports.d.ts',
      resolvers: [elementPlus()],
    }),
    pwa({
      registerType: 'autoUpdate',
      includeAssets: ['icons/safari-pinned-tab.svg'],
      manifest: {
        name: 'nes-client',
        short_name: 'nes-client',
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
        ],
      },
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