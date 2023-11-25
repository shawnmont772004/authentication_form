import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
export const usertest = (req,res)=>{
    res.json({
        "hello":"world"
    });
};//no default


export const updateUser=async(req,res,next)=>{
    if(req.user.id!==req.params.id)
    {
        return next(errorHandler(403,"You can only update your profile."));
    }
    try{
        if(req.body.password)
        {
            req.body.password=bcryptjs.hashSync(req.body.password,10);
        }
        const updatedUser=await User.findByIdAndUpdate(req.params.id,
            {
                $set:{
                    userName:req.body.userName,
                    email:req.body.email,
                    password:req.body.password,
                    profilePic:req.body.profilePic,
                }
        },{ new: true });
        const {password, ...rest} = updatedUser._doc;
        res.status(200).json(rest);
    }
    catch(error)
    {
        next(error);
    }
}