import { Server } from "./config/server.config";
import dotenv from 'dotenv'
dotenv.config()


const _port = process.env.PORT || '3000'


new Server(_port)