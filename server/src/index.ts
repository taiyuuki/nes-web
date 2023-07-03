import type { Request, Response, RequestHandler, NextFunction } from 'express'
import express from 'express'
import roms from './routers/rom'
import { port, getRomPath, hostIp, baseURL } from './server.config'
import logger from './utils/logger'

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
app.use(setHeaders)
app.use('/roms', express.static(getRomPath()))
app.use(roms)

// 开发模式下配置本地ip域名
if (process.env.NODE_ENV === 'development') {
    app.set('host', hostIp)
}

app.listen(port, () => {
    logger.info(`server: ${baseURL}`)
})
