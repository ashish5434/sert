import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div>
     
      <BrowserRouter>
      
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
