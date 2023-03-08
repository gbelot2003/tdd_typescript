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
},
)


export default User;