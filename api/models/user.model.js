import mongoose from "mongoose";

const schema=new mongoose.Schema({
    firstName:{
        type:"string",
        required:true
    },
    lastName:{
        type:"string"
    },
    userName:{
        type:"string",
        required:true,
        unique:true

    },
    email:{
        type:"string",
        required:true,
        unique:true
    },
    password:{
        type:"string",
        required:true

    },
    phoneNo:{
        type:"string",
        required:true,
        unique:true
    }
}, { timestamps : true });

const User=mongoose.model("User",schema);//here User in model refers to the collection name
export default User;