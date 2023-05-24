import type { Response } from 'express'

export function sendEmpty(res: Response, target: string) {
    res.send({
        code: 400,
        message: `${target}内容不能为空`,
    })
}
