import {Sequelize} from "sequelize"
import db from "../config/Database.js"
 
const {DataTypes} = Sequelize;
 

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

const Products=db.define('products',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    color:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    rating:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    src:{
        type:DataTypes.STRING,
        allowNull:false
    }  

});

db.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});


export default Products 

