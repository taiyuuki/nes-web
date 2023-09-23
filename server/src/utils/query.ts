import type { RomsInstance } from '../sequelize/models/roms_model'
import { baseURL, romDir, imgDir } from '../server.config'

function checkQuery<T>(query: T): query is T & {} {
    if (typeof query === 'string') {
        return query.trim() !== ''
    }
    return query !== void 0 && query !== null
}

function resolveURL(str: string) {
    return baseURL + str
}

function resolveRomData<R extends RomsInstance>(rom: R) {
    return {
        id: rom.id,
        category: rom.Category.dataValues.type,
        url: resolveURL(romDir + rom.url),
        cover: resolveURL(imgDir + rom.cover),
        image: resolveURL(imgDir + rom.image),
        title: rom.title,
        language: rom.language,
        type: rom.type,
        source: rom.source,
        comment: rom.comment,
        location: rom.location,
        size: rom.size,
        publisher: rom.publisher,
    }
}

export { checkQuery, resolveURL, resolveRomData }
