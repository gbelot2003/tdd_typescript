import { DataTypes, Model, Optional, Sequelize, InferAttributes, InferCreationAttributes } from 'sequelize'
import { sequelize } from '../config/sqlite.connect'


interface Auth {
    email: string
    password: string
}

interface UserInterface extends Auth {
    id: number;
    name: string
    state: boolean
}


class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> implements UserInterface {
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
}, { sequelize }
)

User.sync()
export default User;
