import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserDataProvider } from './context/UserContext.jsx'
import CaptainContext from './context/CaptainContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
       <UserDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserDataProvider>

    </CaptainContext>
    
     

   
    
  </StrictMode>
)
