import { join } from 'path'

const dbPath = '../db/nes.sqlite3'
const romPath = '../roms'
export const port = 8848
export const baseURL = `http://localhost:${port}`
export const getDataBasePath = () => join(__dirname, dbPath)
export const getRomPath = () => join(__dirname, romPath)

export default {
  getDataBasePath,
  getRomPath,
  port,
  baseURL,
}