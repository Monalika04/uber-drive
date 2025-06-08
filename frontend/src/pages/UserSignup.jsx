import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';

const UserSignup = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[userData,setUserData]=useState({})


  const navigate=useNavigate()
  const { user, setUser } = useContext(UserDataContext);






  const submitHandler =async (e) => {
  e.preventDefault();

  const newUser = {
    fullname: {
      firstname:firstName,
      lastname:lastName
    },
    email:email,
    password:password
  }

  const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

  if(response.status===201)
{
    const data=response.data

    setUser(data.user)
    localStorage.setItem('token',data.token)
    navigate('/home')
}
   // ✅ Correctly logs the data now

  // Clear form
  setEmail('');
  setFirstName('');
  setLastName('');
  setPassword('');
};





  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
      
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
            className="w-32"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign up for Uber
        </h2>

        {/* Form */}
        <form onSubmit={submitHandler}>
          <label className="block text-gray-600 mb-1">What’s your name?</label>
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(e)=>{
                setFirstName(e.target.value)
            }}
             
              required
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value)
            }}
              required
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
            }}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
            }}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 transition text-white py-3 rounded-lg text-lg font-medium"
          >
            Create Account
          </button>
        </form>

        {/* Already have an account */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-black font-medium hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
