import express from "express";
import {authsignupcontroller, authsignincontroller} from "../controllers/auth.controller.js";
const authRouter=express.Router();

authRouter.post('/signup',authsignupcontroller);
authRouter.post('/signin',authsignincontroller);
export default authRouter