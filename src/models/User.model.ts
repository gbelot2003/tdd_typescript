/**
import {Table, Column, Model, Unique, PrimaryKey, AutoIncrement} from 'sequelize-typescript';
import { UsersInterface } from '../interfaces/User.interface';
@Table
export default class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id!: number;

    @Column
    name!: string; 

    @Column
    email!: string;

    @Column
    password!: string;

    @Column
    state!: boolean
}

 */

import { UsersInterface } from "../interfaces/User.interface";
import { DataTypes, Model } from "sequelize";
import { sqlconn } from "../connections/Connec.connections"

const db = sqlconn.createConnection();

const User = db.define<UsersInterface>(
    'user', {
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
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},
)

User.sync().then(() => {
    console.log("Table Users sync")
}).catch((err) => {
    console.log("Table Users error" + err)
})

export default User;