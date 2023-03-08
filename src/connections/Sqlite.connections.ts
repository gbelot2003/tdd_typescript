import { Sequelize } from "sequelize"
import { Connections } from "../interfaces/Connections.interfaces"

export class Sqlite implements Connections {

    public createConnection(): Sequelize {
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: './src/connections/db.sqlite'
        })
        
        return sequelize
    }

}