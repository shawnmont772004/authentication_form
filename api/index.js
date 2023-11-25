import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth.route.js"
import cookieParser from 'cookie-parser';
dotenv.config();
const app=express()

app.use(express.json());
app.use(cookieParser());
 
mongoose
    .connect(process.env.REG_DB)
    .then(()=>{console.log("Connected to the database");})
    .catch((err)=>{console.log("Error connecting to the database",err)})

app.listen(3000,() => {
    console.log("Server is runnning on 3000");
})


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    const message= err.message || "internal server error";
    res.status(statusCode).json({
        success:false,
       statusCode,
       message

    });
});