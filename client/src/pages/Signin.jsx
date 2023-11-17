import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="p-8 border flex flex-col bg-white w-96 sm:w-96 rounded-lg shadow-lg">
        <h1 className="flex justify-center text-2xl font-semibold mb-6">sign in</h1>
        <form className="flex flex-col gap-4 ">
          <input 
          type="text"
          placeholder=" Email" className="border p-2 border-gray-300 rounded-md focus:outline-gray-500"/>
          <input 
          type="text"
          placeholder="Password" className="border p-2 border-gray-300 rounded-md focus:outline-gray-500"/>
          <button 
          type="submit" 
          className="p-2 bg-black  text-white text-lg rounded-lg hover:bg-gray-700">
            sign in</button>
        </form>
        <div className="text-sm text-red-600 flex justify-between p-1 mt-1">
          <p>Don't have an account?</p>
          <span className="underline ">
            <Link to='/signup'>sign up</Link></span>
        </div>

      </div>
        
    </div>
  )
}

export default Signin