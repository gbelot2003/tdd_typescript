import { Server } from "./config/server.config";
import { sqlconn } from "./connections/Connec.connections"
import dotenv from 'dotenv'
dotenv.config()


const _port = process.env.PORT || '3000'


const app = new Server(_port, sqlconn)