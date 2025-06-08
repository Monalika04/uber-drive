import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    // Make logout request to the backend
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.status === 200) {
        // Remove token from local storage and go to login
        localStorage.removeItem('token')
        navigate('/captain-login')
      }
    }).catch(err => {
      console.log('Logout failed:', err)
      // Still remove token and redirect if error occurs
      localStorage.removeItem('token')
      navigate('/captain-login')
    })
  }, [token, navigate])

  return <div>Logging out...</div>
}

export default CaptainLogout
