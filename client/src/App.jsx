import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import LoginPage from './pages/Loginpage';
import SignUp from './pages/Signup';
//import { useEffect, useState } from 'react';
//import axios from 'axios';
import InternDashboard from './pages/interndashboard';


import AdminDashboard from './pages/admindashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/interndashboard" element={<InternDashboard />} />
      <Route path="/admindashboard" element={<AdminDashboard/>}/>
      
      
    </Routes>
  );
}

export default App;

