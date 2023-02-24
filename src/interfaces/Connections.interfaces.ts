

import { Sequelize } from "sequelize"

export interface Connections {
    DB_DATABASE: string
    DB_USER: string
    DB_PASSWORD: string
    DB_HOST: string

    createConnection(): Sequelize;
}