import { Connections } from "../interfaces/Connections.interfaces"
import { Sequelize } from "sequelize"

export class Sqlite implements Connections {

    public DB_DATABASE: string
    public DB_USER: string
    public DB_PASSWORD: string
    public DB_HOST: string

    constructor(db_database: string, db_user?: string, db_password?: string, db_host?: string) {
        this.DB_DATABASE = db_database
        this.DB_USER = db_user || ""
        this.DB_PASSWORD = db_password || ""
        this.DB_HOST = db_host || ""
    }

    public createConnection(): Sequelize {
        const db = new Sequelize('sqlite:memory')
        return db
    }

}