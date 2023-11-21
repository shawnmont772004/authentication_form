import React from 'react'
import {app} from "../firebase.js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom';
function OAuth() {

    const disp=useDispatch();
    const navg=useNavigate();

    const handleGoogleClick=async()=>{
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result =await signInWithPopup(auth, provider);
      console.log(result);

      try{
        const res=await fetch('api/auth/google',{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            Name:result.user.displayName,
            Email:result.user.email,
            Photo:result.user.photoURL,
            FName:result._tokenResponse.firstName,
            LName:result._tokenResponse.lastName
          })
        });
        console.log(result._tokenResponse.firstName);
        const data= await res.json();
        console.log(data);
        disp(signinSuccess(data));
        navg('/'); 
      
      }
      catch(error){
        console.log("not successful");
      }
  }

  return (
    <div><button onClick={handleGoogleClick} type="button" className="text-sm bg-red-600 text-white rounded-lg p-2 w-80 hover:opacity-60">CONTINUE WITH GOOGLE</button></div>
  )
}

export default OAuth