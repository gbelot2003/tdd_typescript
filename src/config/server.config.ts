import { Connections } from "../interfaces/Connections.interfaces";
import express, { Application } from "express";
const bp = require("body-parser")
import cors from "cors"
import User from "../models/User.model";


export class Server {
    private app: Application
    private port: string

    constructor(_port: string) {
        this.app = express()
        this.dbConnect()
        this.port = _port
        this.listen()
    } 

    middlewares() {
        // body parse
        this.app.use(bp.urlencoded({ extended: false }))
        this.app.use(bp.urlencoded())
        this.app.use(bp.json())

        //CORS
        this.app.use(cors())
    }

    async dbConnect() {
        await this.syncDatabase()
    }

    syncDatabase(){
        const user = new User()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}