import React from 'react'
import {useSelector} from 'react-redux';
import {useRef} from 'react';
function Profile() {

  const {currentUser} = useSelector((state) => state.user)
  const fileRef = useRef(null);
  return (
    <>

      <div className="min-h-screen flex justify-center items-center">
      <div className={`p-12 border flex flex-col bg-white md:w-96 sm:w-1/3 w-96 rounded-lg shadow-lg transition-width duration-300`}>
        <input type="file" ref={fileRef} hidden />
        <h1 className="text-2xl p-2 font-semibold mx-auto border-b-2   border-black ">Profile</h1>
        <img src={currentUser.profilePic} alt="profile" className="mt-4 w-24 h-24 rounded-full mx-auto"  onClick={() => fileRef.current.click()} />
        <form className="flex flex-col gap-4 mt-6">
          <input defaultValue={currentUser.userName} type="text" placeholder="username" className="p-2 border rounded-md border-1 border-gray-400 text-black hover:border-green-400 focus:outline-green-500" />
          <input defaultValue={currentUser.email} type="text" placeholder="email" className="p-2 border rounded-md border-1 border-gray-400 text-black hover:border-green-400 focus:outline-green-500" />
          <input type="password" placeholder="password"  className="p-2 border rounded-md border-1 border-gray-400 text-black hover:border-green-400 focus:outline-green-500" />
          <button type="submit" className="text-white font-semibold text-sm bg-green-500 p-2 rounded-md border border-gray-300 hover:opacity-60">UPDATE</button>
        </form>
        <div className="flex justify-between mt-2 text-green-700">
          <span>Delete account?</span>
          <span className="underline">sign out</span>
        </div>
      </div>
    </div>
    </>
     
    )
}

export default Profile