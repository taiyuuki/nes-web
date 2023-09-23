import { Sequelize } from 'sequelize'
import { getDataBasePath } from '../server.config'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: getDataBasePath(),
    logging() {
        return
    },
})

export default sequelize
