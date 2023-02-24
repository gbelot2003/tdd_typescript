import { Connections } from "../interfaces/Connections.interfaces";
import express, { Application } from "express";
const bp = require("body-parser")
import cors from "cors"

export class Server {
    private app: Application
    private port: string
    public _connection: Connections

    constructor(_port: string, dbConnection: Connections) {
        this._connection = dbConnection
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

    dbConnect() {
        const conn = this._connection
        conn.createConnection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}