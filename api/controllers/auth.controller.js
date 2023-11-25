import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import {errorHandler} from "../utils/error.js";
import jwt from "jsonwebtoken";

export const authsignupcontroller= async(req,res,next)=>{
    const {f,l,u,e,p,pno}=req.body;
    const hashedPassword=bcryptjs.hashSync(p,10);
    const typedUser=new  User({firstName:f,lastName:l,userName:u,email:e,password:hashedPassword,phoneNo:pno});
    try{
        await typedUser.save();
        res.status(201).json("User created successfully");
    }
    catch(error)
    {//res.status(500).json(error);
        next(error);
    }

}

export const authsignincontroller=async(req,res,next)=>{
    const {mail,pass}=req.body;
    try{
        const verifyUser= await User.findOne({email : mail});
    if (!verifyUser)
    {
        return next(errorHandler(404,"User not found"));
    }
    const decryptpass= bcryptjs.compareSync(pass,verifyUser.password);
    if(!decryptpass)
    {
        return next(errorHandler(404,"Wrong password"));
    }
    const token=jwt.sign({id:verifyUser._id},process.env.JWT_AUTH_TOKEN_GENERATE_KEY);// to generate an auth token for authentication
    const {password:p, phoneNo:pno, ...rest} =  verifyUser._doc;
    res.
    cookie("auth_token",token,{httpOnly:true})  
    .status(500)
    .json(rest);

    //res.status(500).json("User logged in successfully");
    }
    catch(error)
    {
        next(error);
    }
    
}

export const googleAuthController=async(req,res,next)=>{
    try{
        const existUser= await User.findOne({email:req.body.Email});
        if(existUser){
            const token= jwt.sign({id:existUser._id},process.env.JWT_AUTH_TOKEN_GENERATE_KEY);
            const {password : pp, phoneNo:pn , ...rest} = existUser._doc
            res
            .cookie("auth_token",token,{httpOnly:true})
            .status(200)
            .json(rest);
        }
        else{
            const uname=req.body.Name.split(" ").join(" ").slice(-8)+Math.random().toString(36).slice(-2);
            const genpass= Math.random().toString(36).slice(-8);
            const newUser=new User({
                email:req.body.Email,
                password: bcryptjs.hashSync(genpass,10),
                userName: uname,
                firstName:req.body.FName,
                lastName:req.body.LName,
                profilePic:req.body.Photo
            })
            try{
                await newUser.save();
                //res.status(201).json("User created successfully"); cant send multiplr json
            }
            catch(error)
            {//res.status(500).json(error);
                next(error);
            }
            const token=jwt.sign({id:newUser._id},process.env.JWT_AUTH_TOKEN_GENERATE_KEY);
            const {password : pp , ...rest} = newUser._doc;
            res.cookie("auth_token",token,{httpOnly:true})
            .status(200)
            .json(rest);
        }
    }
    catch(error)
    {
        next(error);
    }
}
