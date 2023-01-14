import { Router as router } from 'express'
import { setSelectSql } from '../sqlite3/sql'
import db from '../sqlite3'
import { checkQuery, resolveUrl, resolveRomData } from '../utils/query'

const roms = router()

roms.get('/categorys', async (req, res) => {
  const categorys = await db.allAsync(setSelectSql({
    select: ['id', 'name'],
    from: 'categorys',
  }))
  res.send({
    code: 200,
    categorys,
  })
})

const selectList = ['roms.id', 'title', 'cover', 'image', 'language', 'type', 'source', 'comment', 'location', 'categorys.name as category', 'size', 'publisher', 'url']
const selectFrom = 'roms join categorys on roms.type=categorys.id'

// /data/category/publisher/keyword/page/count
roms.get('/data/*', async (req, res) => {
  let [cat, publisher, keyword, page, count] = req.path.replace('/data/', '').split('/')
  keyword ??= ''
  const sqlOptions: SelectSqlOption = {
    select: 'count(*) as rows',
    from: selectFrom,
    where: [`(\`title\` like '%${keyword}%')`],
  }
  if (checkQuery(publisher)) {
    sqlOptions.where?.push(`publisher='${publisher}'`)
  }
  if (checkQuery(cat)) {
    sqlOptions.where?.push(`type='${cat}'`)
  }
  const rows = await db.allAsync(setSelectSql(sqlOptions))
  sqlOptions.select = selectList
  sqlOptions.limit = {
    page: checkQuery(page) ? page : '1',
    count: checkQuery(count) ? count : '20',
  }
  const result: RomInfo[] = await db.allAsync(setSelectSql(sqlOptions))
  result.forEach(rom => {
    resolveRomData(rom)
  })
  res.send({
    code: 0, result, count: rows[0].rows,
  })
})

// /rom/id
roms.get('/rom/*', async (req, res) => {
  const id = req.path.substring(req.path.lastIndexOf('/') + 1)
  const sql: SelectSqlOption = {
    select: selectList,
    from: selectFrom,
    where: [`roms.id='${id}'`],
  }
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
})

roms.get('/suggestions/*', async (req, res) => {
  const [keyword] = req.path.replace('/suggestions/', '').split('/')
  const sql: SelectSqlOption = {
    select: ['id', 'title', 'cover'],
    from: 'roms',
    where: [`(\`title\` like '%${decodeURI(keyword)}%')`],
  }
  const result = await db.allAsync(setSelectSql(sql))
  if (result.length > 0) {
    const suggestions = result.map(game => {
      return {
        id: game.id,
        value: game.title,
        cover: resolveUrl(game.cover),
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
})

export default roms