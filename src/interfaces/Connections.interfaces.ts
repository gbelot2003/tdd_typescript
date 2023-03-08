import { Sequelize } from "sequelize"

export interface Connections {
    createConnection(): Sequelize;
}