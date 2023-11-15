import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/user.route.js";

dotenv.config();
const app=express()

mongoose
    .connect(process.env.REG_DB)
    .then(()=>{console.log("Connected to the database");})
    .catch((err)=>{console.log("Error connecting to the database",err)})

app.listen(3000,() => {
    console.log("Server is runnning on 3000");
})

app.use('/api/user',userRouter);