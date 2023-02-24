import { PostgresConn } from './connections/Postgres.connection'
import { Server } from "./config/server.config";
import dotenv from 'dotenv'
dotenv.config()


const _port = process.env.PORT || '3000'

const sqlconn = new PostgresConn(process.env.DB_DATABASE || 'node', process.env.DB_USER || 'root', process.env.DB_ROOT_PASSWORD || 'pass', process.env.DB_HOST || 'mysql')

const app = new Server(_port, sqlconn)