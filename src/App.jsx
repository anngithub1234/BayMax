import { useState } from 'react'
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import Signup from './pages/signup/Signup';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Wallet from './pages/wallet/wallet';
import Support from './pages/support/Support';
import Cards from './pages/cards/Cards';
import Payment from './pages/payement/Payment';
import Transfer from './pages/transfer/Transfer';



function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
    <Route path="/transfer" element={<Transfer/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/cards" element={<Cards/>}/>
    <Route path="/support" element={<Support/>}/>
    
   
   
   
    </Routes>
  </BrowserRouter>
  )
}

export default App
