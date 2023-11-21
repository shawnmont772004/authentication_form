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
        unique:true
    },
    profilePic:{
        type:"String",
        default:"https://imgs.search.brave.com/GbCdC7mgiFvBTu6bnsfQAypLsf3LDOm17CYHzGNSpyA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8yMi0y/MjM5NjhfZGVmYXVs/dC1wcm9maWxlLXBp/Y3R1cmUtY2lyY2xl/LWhkLXBuZy1kb3du/bG9hZC5wbmc"
    }
}, { timestamps : true });

const User=mongoose.model("User",schema);//here User in model refers to the collection name
export default User;