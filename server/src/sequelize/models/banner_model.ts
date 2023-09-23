import { DataTypes, Model } from 'sequelize'
import sequelize from '..'
import { roms_model } from './roms_model'

class Banner extends Model {
    declare id: number
    declare title: string
    // roms表
    declare rom: {
        image: string
    }
}

const banner_model = Banner.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'banner',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
})

banner_model.belongsTo(roms_model, { foreignKey: 'id', targetKey: 'id' })

banner_model.sync()

type BannerInstance = InstanceType<typeof Banner>

export { banner_model, type BannerInstance }
