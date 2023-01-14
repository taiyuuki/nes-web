import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import pinia from './stores'
import axios from './axios'
import { createHead } from '@vueuse/head'
import './css/app.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css'

const head = createHead()

createApp(App).use(pinia).use(route).use(axios).use(head).mount('#app')