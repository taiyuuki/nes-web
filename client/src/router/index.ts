import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
} from 'vue-router'
// vite插件的虚拟模块，详情见：https://github.com/JohnCampionJr/vite-plugin-vue-layouts
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

// 基于文件路径生成路由
const routes =  setupLayouts(generatedRoutes)

// 添加404重定向
routes.push({
  path: '/:catchAll(.*)*',
  // component: () => import('pages/404.vue'),
  redirect: '/',
})

// 创建路由模式
const createHistory = import.meta.env.SSR ? createMemoryHistory : createWebHashHistory

// 创建路由
const route = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createHistory(),
})
export default route