import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";

function Header() {
  const {currentUser}=useSelector((state)=>state.user);
  return (
    <>
    <div className="p-8 flex  justify-between items-center bg-gradient-to-b from-black to-gray-800  shadow-lg  text-white ">
        <div>
            <h1 className="font-semibold text-xl">Registration.website</h1>
        </div>
        <div>
           <ul className="flex sm:gap-32 gap-16 items-center " >
                <li >
                    <Link to="/" className="hidden sm:inline hover:bg-white hover:text-black p-3  rounded-lg">home</Link>
                </li>
                <li>
                {currentUser ? (<Link to="/Profile"><img src={currentUser.profilePic} alt="profile" className="w-14 h-14 rounded-full object-cover"/></Link>) : (
                <Link to="/signin" className="hover:bg-white hover:text-black p-3   rounded-lg mr-8">sign in</Link>)}
                </li>
               
           </ul>
        </div>
    </div>
    </>
  )
}

export default Header