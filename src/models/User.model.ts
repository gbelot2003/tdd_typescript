import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { UserInterface } from '../interfaces/User.interface';
import { sequelize } from '../config/sqlite.connect'

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> implements UserInterface {
    declare id: number;
    declare name: string
    declare email: string
    declare password: string
    declare state: boolean
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
