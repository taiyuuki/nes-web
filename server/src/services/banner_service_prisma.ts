import prisma from '../prisma'
import { resolveURL } from '../utils/query'
import { imgDir } from '../server.config'

async function getBanner(req?: any) {
    const result = await prisma.banner.findMany({
        select: {
            id: true,
            title: true,
            rom: {
                select: {
                    image: true,
                },
            },
        },
    })
    return result.map(({ rom, title, id }) => {
        return {
            id,
            image: resolveURL(imgDir + rom.image, req),
            title,
        }
    })
}

export { getBanner }
