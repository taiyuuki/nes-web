import prisma from '../src/prisma'

async function testConnection() {
    try {
        console.log('Testing Prisma connection...')
        
        // 测试获取所有分类
        const categories = await prisma.categorys.findMany()
        console.log(`✅ Found ${categories.length} categories`)
        
        // 测试获取ROMs数量
        const romCount = await prisma.roms.count()
        console.log(`✅ Found ${romCount} ROMs`)
        
        // 测试获取Banner
        const banners = await prisma.banner.findMany({
            include: {
                rom: true,
            },
        })
        console.log(`✅ Found ${banners.length} banners`)
        
        // 测试查询具体的ROM
        const firstRom = await prisma.roms.findFirst({
            include: {
                Category: true,
            },
        })
        if (firstRom) {
            console.log(`✅ Successfully queried ROM: ${firstRom.title}`)
        }
        
        console.log('✅ All tests passed! Migration successful.')
    }
    catch (error) {
        console.error('❌ Test failed:', error)
    }
    finally {
        await prisma.$disconnect()
    }
}

testConnection()
