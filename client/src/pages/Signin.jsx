import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
  const [formData,setFormData]=useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);

  const navg=useNavigate();

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    });
  }
      

    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(formData);


      try{
        
      setLoading(true);
        const res=await fetch('/api/auth/signin',
        {
          method:"POST",
          headers:{
            'Content-Type':'application/json' 
          },
          body:JSON.stringify(formData)
        });

        const data=await res.json();
        console.log(data);

        if (data.success===false){
          setLoading(false);
          setError(data.message);
          return;
        }
        setLoading(false);
        setError(null);
        navg('/');
      }
      catch(error){
        setLoading(false);
        setError(error.message);
      }
    }
    
  

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="p-8 border flex flex-col bg-white w-96 sm:w-96 rounded-lg shadow-lg">
        <h1 className="flex justify-center text-2xl font-semibold mb-6">sign in</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <input
          onChange={handleChange}
          id="mail"
          type="text"
          placeholder=" Email" className="border p-2 border-gray-300 rounded-md focus:outline-gray-500"/>
          <input
          onChange={handleChange}
          id="pass"
          type="text"
          placeholder="Password" className="border p-2 border-gray-300 rounded-md focus:outline-gray-500"/>
          <button 
          type="submit" 
          className="p-2 bg-black  text-white text-lg rounded-lg hover:bg-gray-700">
            sign in</button>
        </form>
        <div className="text-sm text-red-600 flex justify-between p-1 mt-1">
          <p>Don't have an account?</p>
          <span disabled={loading} className="underline ">
            <Link to='/signup'>{loading ? 'Loading ..' : 'sign in'}</Link></span>
        </div>
        <div>
          {error && <p className="text-sm text-red-600 ">{error}</p>}
        </div>

      </div>
        
    </div>
  )
}


export default Signin