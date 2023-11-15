import express from "express";
import {authcontroller} from "../controllers/auth.controller.js";
const authRouter=express.Router();

authRouter.post('/signup',authcontroller);
export default authRouter