import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";
export const verifyToken = (req,res,next)=>{
    const token=req.cookies.auth_token;
    if(!token)
    {
        return next(errorHandler(401,"Authentication failed. No token provided"));
    }
    jwt.verify(token,process.env.JWT_AUTH_TOKEN_GENERATE_KEY,(err,decode)=>{
        if(err)
        {
            return next(errorHandler(401,"Authentication failed. Invalid token"));
        }
        req.user=decode;
        next();
    })
    
}