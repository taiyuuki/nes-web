import type { Request, Response, RequestHandler, NextFunction } from 'express'
import express from 'express'
import roms from './routers/rom_router'
import categorys from './routers/categorys_router'
import { port, getRomPath, hostIp, baseURL } from './server.config'
import * as logger from './utils/logger'
import banner from './routers/banner_router'

const setHeaders: RequestHandler = function (
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.setHeader('Access-Control-Allow-Origin', '*') // 允许跨域
    res.setHeader('Access-Control-Allow-Headers', '*') // 允许客户端设置请求头
    res.setHeader('Access-Control-Allow-Methods', '*') // 允许客户端的请求方式
    if (req.method === 'OPTIONS') {return res.sendStatus(200)} // options请求快速结束
    next()
}
const app = express()

app.use(express.json())
    // 请求头
    .use(setHeaders)
    // 静态资源
    .use('/roms', express.static(getRomPath()))
    // 路由
    .use(categorys)
    .use(roms)
    .use(banner)

// 开发模式下配置本地ip域名
if (process.env.NODE_ENV === 'development') {
    app.set('host', hostIp)
}

app.listen(port, () => {
    logger.info(`server: ${baseURL}`)
})
