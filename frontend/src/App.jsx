import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Start />} /> 
        <Route path="/login" element={< UserLogin />} /> 
        <Route path="/signup" element={< UserSignup />} /> 
        <Route path="/captainlogin" element={< Captainlogin />} /> 
        <Route path="/captainsignup" element={< Captainsignup />} /> 
        <Route path="/home" elemen={< Home />} />
      </ Routes>
    </div>
  )
}

export default App