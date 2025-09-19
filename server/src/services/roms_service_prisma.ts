import prisma from '../prisma'
import { checkQuery, resolveRomData, resolveURL } from '../utils/query'
import { imgDir, romDir } from '../server.config'

async function getRomlist(cat: string, keyword: string, page: number, limit: number, req?: any) {
    const where: Record<string, any> = {}
    
    if (checkQuery(keyword)) {
        where.title = {
            contains: keyword,
        }
    }
    if (checkQuery(cat)) {
        where.type = cat
    }

    const [result, count] = await Promise.all([
        prisma.roms.findMany({
            select: {
                id: true,
                title: true,
                cover: true,
                image: true,
                language: true,
                type: true,
                source: true,
                comment: true,
                location: true,
                size: true,
                publisher: true,
                url: true,
                Category: {
                    select: {
                        name: true,
                    },
                },
            },
            skip: (page - 1) * limit,
            take: limit,
            where,
        }),
        prisma.roms.count({ where }),
    ])

    return {
        result: result.map(rom => {
            return resolveRomData({
                ...rom,
                Category: { dataValues: { type: rom.Category.name } },
            }, req)
        }),
        count,
    }
}

async function getRomById(id: string | number, req?: any) {
    const romInfo = await prisma.roms.findUnique({
        where: { id: Number(id) },
    })
    
    if (romInfo) {
        return {
            ...romInfo,
            url: resolveURL(romDir + romInfo.url, req),
            image: resolveURL(imgDir + romInfo.image, req),
            cover: resolveURL(imgDir + romInfo.cover, req),
        }
    }
    return romInfo
}

async function getRandomList(n: string | number, cat: string, ignore: string, req?: any) {
    // 使用Prisma的正常查询方法，然后随机排序
    const where: any = {}
    
    if (checkQuery(cat)) {
        where.type = cat
    }
    if (checkQuery(ignore)) {
        where.id = { not: Number(ignore) }
    }
    
    // 获取所有符合条件的记录然后随机选择
    const allRoms = await prisma.roms.findMany({
        select: {
            id: true,
            title: true,
            cover: true,
            image: true,
            language: true,
            type: true,
            source: true,
            comment: true,
            location: true,
            size: true,
            publisher: true,
            url: true,
            Category: {
                select: {
                    name: true,
                },
            },
        },
        where,
        skip: 1, // 跳过第一个
    })
    
    // 随机打乱并取前n个
    const shuffled = allRoms.sort(() => 0.5 - Math.random())
    const result = shuffled.slice(0, Number(n))

    return result.map(rom => {
        return resolveRomData({
            ...rom,
            Category: { dataValues: { type: rom.Category.name } },
        }, req)
    })
}

async function getSuggestions(keyword: string) {
    const result = await prisma.roms.findMany({
        select: {
            id: true,
            title: true,
            cover: true,
        },
        where: {
            title: {
                contains: keyword,
            },
        },
    })
    return result
}

async function deleteRomById(id: string | number) {
    const result = await prisma.roms.delete({
        where: { id: Number(id) },
    })
    return result
}

export { getRomlist, getRomById, getRandomList, getSuggestions, deleteRomById }
