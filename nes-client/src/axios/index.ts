import type { AxiosInstance, AxiosStatic } from 'axios'
import axios from 'axios'
import type { App } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosStatic
    $api: AxiosInstance
  }
}

interface GameSearchOption {
  cat: string
  publisher: string
  keyword: string
  page: number
  limit: number
}

export const api = axios.create({ baseURL: 'http://localhost:8848' })

export async function requestCategory(): Promise<{ [key: string]: string }> {
  const { data } = await api.get('/categorys')
  return data.categorys
}

export async function requestGameList(options: GameSearchOption) {
  const { data } = await api.get(`/data/${options.cat}/${options.publisher}/${options.keyword}/${options.page}/${options.limit}`)
  return data
}

export default {
  install(app: App) {
    app.config.globalProperties.$axios = axios
    app.config.globalProperties.$api = api
  },
}