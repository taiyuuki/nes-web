import { categorys_model } from '../sequelize/models/categorys_model'

async function getAllCategorys() {
    const result = await categorys_model.findAll()
    return result
}

export { getAllCategorys }
