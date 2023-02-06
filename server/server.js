const express= require('express')
const dotenv=require('dotenv')
const connectDb=require('./config/Database');
const colors= require("colors")
const userRoutes=require("./routes/userRoutes")
const app=express();
app.use(express.json())
dotenv.config()
connectDb();
app.use('/api/user/',userRoutes)
const PORT=process.env.PORT||5000;
app.listen(5000,console.log(`Server Started at ${PORT}`.green.bold))