import React, { createContext } from 'react'
import { useState } from 'react'

// 🎒 1. Create a special backpack called UserDataContext
export const UserDataContext = createContext()

// 📦 2. This component will hold the backpack and share it
const UserContext = ({ children }) => {

  // 📂 3. This is what we keep in our backpack (a user's info)
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: ''
    }
  })

  // 👐 4. We give this backpack to the children (pages/components) inside our app
  return (
    <div>
      <UserDataContext.Provider value={{ user, setUser }}>
        {children} {/* 🎈These are the parts of the app that can now use or change the user info */}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
