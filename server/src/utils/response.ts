import type { Response } from 'express'

export function sendEmpty(res: Response) {
  res.send({
    code: 400,
    message: '内容不能为空',
  })
}