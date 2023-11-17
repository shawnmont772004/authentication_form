import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import {errorHandler} from "../utils/error.js";
export const authsignupcontroller= async(req,res,next)=>{
    const {f,l,u,e,p,pno}=req.body;
    const hashedPassword=bcryptjs.hashSync(p,10);
    const typedUser=new  User({firstName:f,lastName:l,userName:u,email:e,password:hashedPassword,phoneNo:pno});
    try{
        await typedUser.save();
        res.status(201).json("User created successfully");
    }
    catch(error)
    {
        //res.status(500).json(error);
        next(error);
    }

}

export const authsignincontroller=async(req,res,next)=>{
    const {mail,pass}=req.body;
    try{
        const verifyUser= await User.findOne({email : mail});
    if (!verifyUser)
    {
        next(errorHandler(404,"User not found"));
    }
    const decryptpass= bcryptjs.compareSync(pass,verifyUser.password);
    if(!decryptpass)
    {
        next(errorHandler(404,"Wrong password"));
    }
    res.status(500).json("User logged in successfully");
    }
    catch(error)
    {
        next(error);
    }
    
}