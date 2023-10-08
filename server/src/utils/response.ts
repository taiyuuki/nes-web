import type { Response } from 'express'
import * as logger from './logger'
import os from 'os'

function sendEmpty(res: Response, target: string) {
    res.send({
        code: 400,
        message: `${target}内容不能为空`,
    })
}

async function dispatchResponse(
    target: Function,
    res: Response,
    message?: string,
    err?: (args: any) => any
) {
    message = message ?? '发生错误'
    try {
        await target()
    }
    catch (e) {
        logger.error(`${e}`)
        if (err) {
            err(e)
        }
        res.send({
            code: 500,
            msg: message,
        })
    }
}

function getIpAddress() {
    const ifaces = os.networkInterfaces()
    for (const dev in ifaces) {
        const iface = ifaces[dev]!

        for (let i = 0; i < iface.length; i++) {
            const { family, address, internal } = iface[i]

            if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
                return address
            }
        }
    }
    return '127.0.0.1'
}

export { sendEmpty, dispatchResponse, getIpAddress }
