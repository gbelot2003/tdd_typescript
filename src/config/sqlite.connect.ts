import { Sqlite } from '../connections/Sqlite.connections'
import { PostgresConn } from '../connections/Postgres.connection'
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()




// ahora la coneccion se guarda aqui 
export const sequelize = new Sequelize('sqlite::memory:')

//export const sequelize = new Sqlite().createConnection()

/** solo tenemos que cambiar la conexion para
 *  mudar la base de datos                 
 *******************************************/
//export const sequelize = new PostgresConn(process.env.DB_DATABASE || 
//      'node', process.env.DB_USER || 'root', process.env.DB_ROOT_PASSWORD || 
//         'pass', process.env.DB_HOST || 'mysql').createConnection