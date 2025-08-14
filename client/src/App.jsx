import React from 'react'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/Captainsignup'
import Captainlogin from './pages/Captainlogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'
import CaptainHome from './pages/CaptainHome'
import UserProtectWrapper from './pages/UserProtectWrapper'
const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
         <Route path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />
        {/* <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } /> */}
          <Route path='/captain-home' element={<CaptainHome />} />

      </Routes>
 
   
    
    </div>
  )
}

export default App
