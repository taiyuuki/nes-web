import { join } from 'path'

export const dataBase = () => join(__dirname, '../db/nes.sqlite3')
export const romPath = () => join(__dirname, '../roms')
export const port = 8848
export const baseUrl = `http://localhost:${port}`

export default {
  dataBase,
  romPath,
  port,
  baseUrl,
}