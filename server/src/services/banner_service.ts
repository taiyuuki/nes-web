import { roms_model } from '../sequelize/models/roms_model'
import { banner_model } from '../sequelize/models/banner_model'
import { resolveURL } from '../utils/query'
import { imgDir } from '../server.config'

async function getBanner() {
    const result = await banner_model.findAll({
        attributes: ['id', 'title'],
        include: {
            model: roms_model,
            attributes: ['image'],
        },
    })
    return result.map(({ rom, title, id }) => {
        return {
            id,
            image: resolveURL(imgDir + rom.image),
            title: title,
        }
    })
}

export { getBanner }
