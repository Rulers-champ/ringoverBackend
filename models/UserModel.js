import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const {DataTypes} = Sequelize;
 
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const Users = db.define('users',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }

})

db.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

export default Users