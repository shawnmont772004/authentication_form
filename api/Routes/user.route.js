import express from "express";
import { updateUser, usertest } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const userRouter=express.Router();

userRouter.get('/test',usertest);
userRouter.post('/update/:id',verifyToken,updateUser);
export default userRouter;
//without verifyToken and req.user.id !== req.params.id any user who has an authenticated token knowing id of any other user can change its user details in the params of the route url.