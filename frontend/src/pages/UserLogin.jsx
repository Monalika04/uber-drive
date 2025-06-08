import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';


const UserLogin = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')
    const[userData,setUserData]=useState({})


        const { user, setUser } = useContext(UserDataContext);
    const navigate=useNavigate()

    

    const submitHandler = async(e) => {
  e.preventDefault();

  const userData = {
    email:email,
    password:password,
  };

 const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`,userData)

  if(response.status===200)
{
    const data=response.data

    setUser(data.user)
    localStorage.setItem('token',data.token)
    navigate('/home')
}    

  setEmail('');
  setPassword('');
};



 
  return (
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
          Log in to Uber
        </h2>

        {/* Form */}
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input required
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}

              type="email"
              placeholder="you@example.com"
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
            Log In
          </button>
        </form>

        {/* Optional Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-black font-medium hover:underline">
            Sign Up
          </Link>
        </div>

        {/* ↓ Sign in as Captain Button ↓ */}
        <div className="mt-6">
          <Link
            to="/captain-login"
            className="w-full block text-center border border-gray-300 hover:border-black transition text-gray-800 py-3 rounded-lg text-sm font-medium"
          >
            Sign in as Captain 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
