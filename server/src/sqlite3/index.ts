import sqlite from 'sqlite3'
import type { Response } from 'express'
import { getDataBasePath } from '../server.config'
import logger from '../utils/logger'

const sqlite3 = sqlite.verbose()
declare module 'sqlite3' {
  interface Database {
    allAsync: (sql: string, params?: (string | number)[]) => Promise<any[]>
    runAsync: (sql: string, params?: (string | number)[]) => Promise<any[]>
  }
}

const db = new sqlite3.Database(getDataBasePath())

db.allAsync = (sql, parmas) => {
  return new Promise((resolve, reject) => {
    db.all(sql, parmas, (err, rows) => {
      if (err) {reject(err)}
      resolve(rows)
    })
  })
}
db.runAsync = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err: Error, rows: unknown[]) => {
      if (err) {reject(err)}
      resolve(rows)
    })
  })
}

export async function dispatchResponse(
  target: Function,
  res: Response,
  message?: string,
  err?: Function
) {
  message = message ?? '发生错误'
  try {
    await target()
  }
  catch (e) {
    logger.error(`${e}`)
    if (err) {
      err()
    }
    res.send({
      code: 500,
      msg: message,
    })
  }
}

export default db