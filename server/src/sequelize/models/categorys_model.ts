import { DataTypes, Model } from 'sequelize'
import sequelize from '..'

class Categorys extends Model {
    declare id: number
    declare name: string
}

const categorys_model = Categorys.init({
    id: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'categorys',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
})

categorys_model.sync()

type CategorysInstance = InstanceType<typeof Categorys>

export { categorys_model, type CategorysInstance }
