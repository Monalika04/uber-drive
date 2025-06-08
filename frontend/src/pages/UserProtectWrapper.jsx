import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserDataContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // If no token, redirect to login
    if (!token) {
      navigate('/login')
      return
    }

    // ✅ Correct Axios call
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.status === 200) {
          setUser(response.data.user) // ✅ Use setUser not setCaptain
          setIsLoading(false)
        }
      })
      .catch(err => {
        console.log(err)
        localStorage.removeItem('token')
        navigate('/login')
      })
  }, [token, navigate, setUser])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default UserProtectWrapper
