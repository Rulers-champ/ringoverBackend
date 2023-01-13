import express from 'express'
import cors from 'cors'
import db from "./config/Database.js";
import ProductRoute from './routes/ProductRoute.js'
import UserRoute from './routes/UserRoute.js'

const app=express();

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


app.use(cors())
app.use(express.json())
app.use(ProductRoute) 
app.use(UserRoute)

app.listen(5000,console.log("Server Running in Port 5000"));

app.get("/",(req,res)=>{
    res.send("Hello Baby");
});

