import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Captainlogin = () => {
    const[email,setEmail]=useState('');
        const[password,setPassword]=useState('')

        const{captain,setCaptain}=React.useContext(CaptainDataContext)
        const navigate=useNavigate()

        
    
    
 const submitHandler = async (e) => {
  e.preventDefault();

  const captain = {
    email,
    password,
  };
  const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)
  
    if(response.status===200)
  {
      const data=response.data
  
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
  }    

 
  setEmail('');
  setPassword('');
};

  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        {/* Uber Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
            className="w-32"
          />
        </div>

        {/* Login Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
           Captain Login
        </h2>

        {/* Form */}
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Captain ID / Email</label>
            <input required
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}

              type="email"
              placeholder="captain@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}

              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 transition text-white py-3 rounded-lg text-lg font-medium"
          >
            Login as Captain
          </button>
        </form>

        {/* Optional Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Not a Captain?{' '}
          <Link to="/captain-signup" className="text-black font-medium hover:underline">
            Sign Up
          </Link>
        </div>

        {/* ↓ Sign in as Captain Button ↓ */}
        <div className="mt-6">
          <Link
            to="/login"
            className="w-full block text-center border border-gray-300 hover:border-black transition text-gray-800 py-3 rounded-lg text-sm font-medium"
          >
            Sign in as User 
          </Link>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Captainlogin
