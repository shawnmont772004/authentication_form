import express from "express";
import {authsignupcontroller, authsignincontroller, googleAuthController} from "../controllers/auth.controller.js";
const authRouter=express.Router();

authRouter.post('/signup',authsignupcontroller);
authRouter.post('/signin',authsignincontroller);
authRouter.post("/google",googleAuthController);


export default authRouter