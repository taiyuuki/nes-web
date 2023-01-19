import { Router as router } from 'express'
import { setSelectSql } from '../sqlite3/sql'
import db, { dispatchResponse } from '../sqlite3'
import { sendEmpty } from '../utils/response'
import { checkQuery, resolveURL, resolveRomData } from '../utils/query'
import { imgDir } from '../server.config'

const roms = router()

// 获取游戏分类
roms.get('/categorys', async (_, res) => {
  await dispatchResponse(async () => {
    const categorys = await db.allAsync(setSelectSql({
      select: ['id', 'name'],
      from: 'categorys',
    }))
    res.send({
      code: 200,
      categorys,
    })
  }, res)
})

const selectList = ['roms.id', 'title', 'cover', 'image', 'language', 'type', 'source', 'comment', 'location', 'categorys.name as category', 'size', 'publisher', 'url']
const selectFrom = 'roms join categorys on roms.type=categorys.id'

// 获取游戏ROM列表
// /romlist?cat=xxx&keyword=xxx&page=xxx&limit=xxx
roms.get('/romlist', async (req, res) => {
  let { cat, keyword, page, limit } = req.query as Record<string, string>
  cat ??= ''
  keyword ??= ''
  page ??= '1'
  limit ??= '20'
  const sqlOptions: SelectSqlOption = {
    select: 'count(*) as count',
    from: selectFrom,
    where: [],
  }
  if (checkQuery(keyword)) {
    sqlOptions.where?.push(`(\`title\` like '%${decodeURI(keyword)}%')`)
  }
  if (checkQuery(cat)) {
    sqlOptions.where?.push(`type='${cat}'`)
  }
  await dispatchResponse(async () => {
    const rows = await db.allAsync(setSelectSql(sqlOptions))
    sqlOptions.select = selectList
    sqlOptions.limit = {
      page,
      count: limit,
    }
    const result: RomInfo[] = await db.allAsync(setSelectSql(sqlOptions))
    result.forEach(rom => {
      resolveRomData(rom)
    })
    res.send({
      code: 200, result, count: rows[0].count,
    })
  }, res)
})

// 随机获取N个游戏
// /random?n=xxx&cat=xxx&ignore=xxx
roms.get('/random', async (req, res) => {
  let { n, cat, ignore } = req.query as Record<string, string>
  n ??= '8'
  const sqlOptions: SelectSqlOption = {
    select: selectList,
    from: selectFrom,
    order: {
      by: 'RANDOM()',
      sort: 'asc',
    },
    limit: {
      page: 1,
      count: n,
    },
    where: [],
  }
  if (checkQuery(cat)) {
    sqlOptions.where?.push(`type='${cat}'`)
  }
  if (checkQuery(ignore)) {
    sqlOptions.where?.push(`roms.id<>${ignore}`)
  }
  await dispatchResponse(async () => {
    const result = await db.allAsync(setSelectSql(sqlOptions))
    result.forEach(rom => {
      resolveRomData(rom)
    })
    res.send({ code: 200, result })
  }, res)
})

// 根据id获取单个ROM信息
// /rom?id=xxx
roms.get('/rom', async (req, res) => {
  const id = req.query.id as string
  if (!checkQuery(id)) {
    sendEmpty(res)
    return
  }
  const sql: SelectSqlOption = {
    select: selectList,
    from: selectFrom,
    where: [`roms.id='${id}'`],
  }
  await dispatchResponse(async () => {
    const roms = await db.allAsync(setSelectSql(sql))
    if (roms.length === 1) {
      resolveRomData(roms[0])
      res.send({
        code: 200,
        rom: roms[0],
      })
    }
    else {
      res.send({ code: 404 })
    }
  }, res)
})

// 搜索建议
// /suggestions?keyword=xxx
roms.get('/suggestions', async (req, res) => {
  const keyword = req.query.keyword as string
  const sql: SelectSqlOption = {
    select: ['id', 'title', 'cover'],
    from: 'roms',
  }
  if (checkQuery(keyword)) {
    sql.where = [`(\`title\` like '%${decodeURI(keyword)}%')`]
  }
  else {
    sendEmpty(res)
    return
  }
  await dispatchResponse(async () => {
    const result = await db.allAsync(setSelectSql(sql))
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
      res.send({ code: 404 })
    }
  }, res)
})

export default roms