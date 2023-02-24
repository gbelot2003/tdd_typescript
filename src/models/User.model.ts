import { UsersInterface } from "../interfaces/User.interface";
import { DataTypes } from "sequelize";
import { sqlconn } from "../connections/Connec.connections"

const db = sqlconn.createConnection();

export const User = db.define<UsersInterface>(
    'user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN,
    },
},
)

User.sync().then(() => {
    console.log("Table Users sync")
}).catch((err) => {
    console.log("Table Users error" + err)
})