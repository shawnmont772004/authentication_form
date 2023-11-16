import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
export const authcontroller= async(req,res,next)=>{
    const {fname,lname,username,email,password,phone}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const typedUser=new  User({firstName:fname,lastName:lname,userName:username,email:email,password:hashedPassword,phoneNo:phone});
    try{
        await typedUser.save();
        res.status(201).send("User create dsuccessfully");
    }
    catch(error)
    {
        //res.status(500).json(error);
        next(error);
    }

}