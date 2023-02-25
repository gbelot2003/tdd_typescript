import { Server } from "./config/server.config";
import { sqlconn, sqliteCon } from "./connections/Connec.connections"
import dotenv from 'dotenv'
dotenv.config()


const _port = process.env.PORT || '3000'

/** TODO: configurar entornos */

const app = new Server(_port, sqliteCon)