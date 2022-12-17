import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import pinia from './stores'
import './css/app.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

import axios from './axios'
import 'uno.css'

createApp(App).use(pinia).use(route).use(axios).mount('#app')