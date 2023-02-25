import { PostgresConn } from './Postgres.connection'
import dotenv from 'dotenv'
import { Sqlite } from './Sqlite.connection'
dotenv.config()

export const sqlconn = new PostgresConn(process.env.DB_DATABASE || 'node_db', 
    process.env.DB_USER || 'root', process.env.DB_ROOT_PASSWORD || 'password', process.env.DB_HOST || 'postgres')

    
export const sqliteCon = new Sqlite("./db.sqlite", "sqlite")