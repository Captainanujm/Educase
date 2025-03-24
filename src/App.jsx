import React from 'react'
import Home from './Home'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'
const App = () => {
  return (
  <Router>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/profile" element={<Profile />} />
</Routes>
  </Router>

      
  )
}

export default App
