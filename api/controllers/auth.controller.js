import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
export const authcontroller= async(req,res,next)=>{
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