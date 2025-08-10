import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/Captainsignup'
import Captainlogin from './pages/Captainlogin'
import UserSignup from './pages/UserSignup'
const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
      </Routes>
 
   
    
    </div>
  )
}

export default App
