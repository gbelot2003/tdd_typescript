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
        this.port = _port
        this.listen()
        this.dbConnect()
    } 

    middlewares() {
        // body parse
        this.app.use(bp.urlencoded({ extended: false }))
        this.app.use(bp.urlencoded())
        this.app.use(bp.json())

        //CORS
        this.app.use(cors())
    }

    /** metodo de prueba de coneccion */
    async dbConnect() {
        await this.syncDatabase()
    }

    /** metodo de prueba de coneccion */
    syncDatabase(){
        const user = new User()
        console.log('connections read')
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}