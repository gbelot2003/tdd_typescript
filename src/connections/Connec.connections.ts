import { PostgresConn } from './Postgres.connection'
import dotenv from 'dotenv'
dotenv.config()

export const sqlconn = new PostgresConn(process.env.DB_DATABASE || 'node', process.env.DB_USER || 'root', process.env.DB_ROOT_PASSWORD || 'pass', process.env.DB_HOST || 'postgres')
