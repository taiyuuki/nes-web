import { join } from 'path'
import { getIpAddress } from './utils/query'

const dbPath = '../db/nes.sqlite3'
const romPath = '../roms'
const romDir = '/roms/'
const imgDir = '/roms/img/'
const hostIp = getIpAddress()
const getDataBasePath = () => join(__dirname, dbPath)
const getRomPath = () => join(__dirname, romPath)

const port = 8848
let baseURL = `http://localhost:${port}`

// 开发模式下配置域名为本地ip
if (process.env.NODE_ENV === 'development') {
    baseURL = `http://${hostIp}:${port}`
}

export {
    romDir,
    imgDir,
    getDataBasePath,
    getRomPath,
    port,
    baseURL,
    hostIp,
}
