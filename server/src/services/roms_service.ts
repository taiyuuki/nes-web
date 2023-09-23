import { Op, fn } from 'sequelize'
import { categorys_model } from '../sequelize/models/categorys_model'
import { roms_model } from '../sequelize/models/roms_model'
import { checkQuery, resolveRomData, resolveURL } from '../utils/query'
import { imgDir, romDir } from '../server.config'

async function getRomlist(cat: string, keyword: string, page: number, limit: number) {
    const where: Record<string, any> = {}
    if (checkQuery(keyword)) {
        where.title = {
            [Op.like]: `%${keyword}%`,
        }
    }
    if (checkQuery(cat)) {
        where.type = cat
    }
    const result = await roms_model.findAndCountAll({
        attributes: ['id', 'title', 'cover', 'image', 'language', 'type', 'source', 'comment', 'location', 'size', 'publisher', 'url'],
        include: {
            model: categorys_model,
            attributes: [['name', 'type']],
        },
        offset: (+page - 1) * +limit,
        limit: +limit,
        where,
    })
    return {
        result: result.rows.map(rom => {
            return resolveRomData(rom)
        }),
        count: result.count,
    }
}

async function getRomById(id: string | number) {
    const romInfo = await roms_model.findByPk(id)
    if (romInfo) {
        romInfo.url = resolveURL(romDir + romInfo.url)
        romInfo.image = resolveURL(imgDir + romInfo.image)
        romInfo.cover = resolveURL(imgDir + romInfo.cover)
    }
    return romInfo
}

async function getRandomList(n: string | number, cat: string, ignore: string) {
    const where: Record<string, any> = {}
    if (checkQuery(cat)) {
        where.type = cat
    }
    if (checkQuery(ignore)) {
        where.id = { [Op.ne]: ignore }
    }
    const result = await roms_model.findAll({
        attributes: ['id', 'title', 'cover', 'image', 'language', 'type', 'source', 'comment', 'location', 'size', 'publisher', 'url'],
        include: {
            model: categorys_model,
            attributes: [['name', 'type']],
        },
        order: [[fn('RANDOM'), 'ASC']],
        offset: 1,
        limit: +n,
        where,
    })
    return result.map(rom => {
        return resolveRomData(rom)
    })
}

async function getSuggestions(keyword: string) {
    const result = await roms_model.findAll({
        attributes: ['id', 'title', 'cover'],
        where: {
            title: {
                [Op.like]: `%${keyword}%`,
            },
        },
    })
    return result
}

export { getRomlist, getRomById, getRandomList, getSuggestions }
