import type { AxiosInstance, AxiosStatic } from 'axios'
import axios from 'axios'
import type { App } from 'vue'
import { config } from 'src/client.config'
import { isNotEmptyString } from 'src/utils'
import { errorNotify } from 'src/utils/notify'

declare module 'vue' {
    interface ComponentCustomProperties {
        $axios: AxiosStatic
        $api: AxiosInstance
    }
}

interface GameSearchOption {
    cat: string
    keyword: string
    page: number
    limit: number
}

export const api = axios.create({
    baseURL: config.baseURL,
    timeout: 12000,
})

api.interceptors.response.use((response) => {
    if (response.data.TimeOutFlag) {
        errorNotify('请求超时，请稍后重试。')
    }
    return response
}, (err) => {
    errorNotify('服务器无响应，请稍后重试。')
    console.error(err)
})

// 请求轮播图
export async function requestBanner(): Promise<{ banner: { id: string; title: string; image: string }[] }> {
    const { data } = await api.get('/banner')
    return data
}

// 请求游戏分类
export async function requestCategory(): Promise<{ [key: string]: string }> {
    const { data } = await api.get('/categorys')
    return data.categorys
}

// 请求游戏列表
export async function requestGameList(options: GameSearchOption) {
    let path = `/romlist?page=${options.page}&limit=${options.limit}`
    if (isNotEmptyString(options.cat)) {
        path += `&cat=${options.cat}`
    }
    if (isNotEmptyString(options.keyword)) {
        path += `&keyword=${options.keyword}`
    }
    const { data } = await api.get(path)
    return data
}

// 请求搜索建议
export async function requestSuggestions(keyword: string) {
    const { data } = await api.get(`/suggestions?keyword=${keyword}`)
    return data
}

// 请求单个游戏
export async function requestRomInfo(id: string): Promise<{ code: number; rom: RomInfo  }> {
    // const { data } = await api.get(`/rom?id=${id}`)
    const { data } = await api.get(`/rom?id=${id}`)
    return data
}

/**
 * 请求随机游戏
 * @param n 数量
 * @param cat 分类
 */
export async function requestRandomList(n?: number, cat?: string, ignore?: string) {
    let path = '/random'
    if (isNotEmptyString(`${n}`)) {
        path += `?n=${n}`
    }
    if (isNotEmptyString(cat)) {
        path += `&cat=${cat}`
    }
    if (isNotEmptyString(ignore)) {
        path += `&ignore=${ignore}`
    }
    const { data } = await api.get(path)
    return data
}

export default {
    install(app: App) {
        app.config.globalProperties.$axios = axios
        app.config.globalProperties.$api = api
    },
}
