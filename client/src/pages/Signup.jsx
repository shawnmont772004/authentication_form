import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

function Signup() {
  
  const [details,setDetails]=useState({
    f:"",
    l:"",
    u:"",
    p:"",
    e:"",
    pno:""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange=(e)=>{
    setDetails((prev)=>{
      return{
        ...prev,
      [e.target.name]:e.target.value
      }     
    });
  }
  //console.log(details);
  const navigate=useNavigate();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(details);

    try{
      setLoading(true);

      const res=await fetch('api/auth/signup',
      {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        }, 
        body:JSON.stringify(details),
      }
      );
    
      const data = await res.json();
      console.log(data);

      if (data.success === false)
      {
        setLoading(false);
        setError(data.message);
        return;
      }
      navigate('/signin');
      setLoading(false);
      setError(null);
      
    }
  catch(error)
    {
      setLoading(false);
      setError(error.message);
    }

  }


  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 sm:w-96 mt-12 mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            name="f" 
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            name="l" 
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="User name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            name="u" 
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            name="e" 
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            name="p" 
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone no."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            name="pno" 
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-600 focus:outline-none"
          disabled={loading}>
          {loading ? "loading...":"sign up"}
        </button>
        <div className="text-red-700 flex justify-center gap-32 mt-1 ">
          <p>Have an account?</p>
          <Link to="/signin">
            <p className="underline">sign in?</p>
          </Link>
        </div>
        {error && <p className='text-red-500 p-2 mt-5'>{error}</p>}
        
      </form>
    </div>
  </div>
  </>
  )
}

export default Signup