import { DataTypes, Model, Optional, Sequelize, InferAttributes, InferCreationAttributes } from 'sequelize'
import { sequelize } from '../connections/Connect.connection'


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: number;
    declare name: string
    declare email: string
    declare password: string
    declare state: boolean
}

User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize,
})

User.sync()
export default User;
