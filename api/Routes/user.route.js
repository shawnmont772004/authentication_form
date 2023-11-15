import express from "express";
import { usertest } from "../controllers/user.controller.js";


const userRouter=express.Router();

userRouter.get('/test',usertest);
export default userRouter;