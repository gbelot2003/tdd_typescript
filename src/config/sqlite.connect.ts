import { Sqlite } from '../connections/Sqlite.connections'
import dotenv from 'dotenv'
dotenv.config()

   // ahora la coneccion se guarda aqui 
export const sequelize = new Sqlite().createConnection()
