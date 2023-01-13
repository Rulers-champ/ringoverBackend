import {Sequelize} from "sequelize"
 
const db = new Sequelize('ecomm_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;

