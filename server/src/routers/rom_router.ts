import { Router as router } from 'express'
import { dispatchResponse, sendEmpty } from '../utils/response'

import { checkQuery, resolveURL } from '../utils/query'
import { imgDir } from '../server.config'
import { getRandomList, getRomById, getRomlist, getSuggestions } from '../services/roms_service'

const roms = router()

// 获取游戏ROM列表
// /romlist?cat=xxx&keyword=xxx&page=xxx&limit=xxx
roms.get('/romlist', async (req, res) => {
    let { cat, keyword, page, limit } = req.query as Record<string, string>
    cat ??= ''
    keyword ??= ''
    page ??= '1'
    limit ??= '20'
    await dispatchResponse(async () => {
        const list = await getRomlist(cat, keyword, +page, +limit)
        res.send({
            code: 200, result: list.result, count: list.count,
        })
    }, res)
})

// 随机获取N个游戏
// /random?n=xxx&cat=xxx&ignore=xxx
roms.get('/random', async (req, res) => {
    let { n, cat, ignore } = req.query as Record<string, string>
    n ??= '8'
    await dispatchResponse(async () => {
        const result = await getRandomList(n, cat, ignore)
        res.send({ code: 200, result })
    }, res)
})

// 根据id获取单个ROM信息
// /rom?id=xxx
roms.get('/rom', async (req, res) => {
    const id = req.query.id as string
    if (!checkQuery(id)) {
        sendEmpty(res, 'id')
        return
    }
    await dispatchResponse(async () => {
        const rom = await getRomById(id)
        if (rom) {
            res.send({
                code: 200,
                rom,
            })
        }
        else {
            res.send({ code: 400 })
        }
    }, res)
})

// 搜索建议
// /suggestions?keyword=xxx
roms.get('/suggestions', async (req, res) => {
    const keyword = req.query.keyword as string
    if (checkQuery(keyword)) {
        await dispatchResponse(async () => {
            const result = await getSuggestions(keyword)
            if (result.length > 0) {
                const suggestions = result.map(game => {
                    return {
                        id: game.id,
                        value: game.title,
                        cover: resolveURL(imgDir + game.cover),
                    }
                })
                res.send({
                    code: 200,
                    suggestions,
                })
            }
            else {
                res.send({ code: 0 })
            }
        }, res)
    }
    else {
        sendEmpty(res, 'keyword')
        return
    }
})

// 根据id删除ROM
// /delete?id=xxx
roms.delete('/delete', async (req, res) => {
    const id = req.query.id as string
    if (!checkQuery(id)) {
        sendEmpty(res, 'id')
        return
    }
    await dispatchResponse(async () => {
        const rom = await getRomById(id)
        if (rom) {
            rom.destroy()
            res.send({ code: 200 })
        }
        else {
            res.send({ code: 400 })
        }
    }, res)
})

export default roms
