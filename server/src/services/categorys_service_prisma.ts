import prisma from '../prisma'

async function getAllCategorys() {
    const result = await prisma.categorys.findMany()
    return result
}

export { getAllCategorys }
