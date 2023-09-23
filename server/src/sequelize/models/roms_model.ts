import { DataTypes, Model } from 'sequelize'
import sequelize from '..'
import { categorys_model } from './categorys_model'

function textField() {
    return {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}

class Roms extends Model {
    declare id: number
    declare title: string
    declare cover: string
    declare image: string
    declare language: string
    declare type: string
    declare source: string
    declare comment: string
    declare location: string
    declare size: string
    declare publisher: string
    declare url: string
    // categorys表
    declare Category: {
        dataValues: {
            type: string
        }
    }
}

const roms_model = Roms.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    title: textField(),
    cover: textField(),
    image: textField(),
    language: textField(),
    type: textField(),
    source: textField(),
    comment: textField(),
    location: textField(),
    size: textField(),
    publisher: textField(),
    url: textField(),
},
{
    sequelize,
    modelName: 'roms',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
})

roms_model.belongsTo(categorys_model, { foreignKey: 'type', targetKey: 'id' })
roms_model.sync()

type RomsInstance = InstanceType<typeof Roms>

export { roms_model, type RomsInstance }
