
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import SecondPage from '../pages/secondPage';
import Navbar from '../components/NavBar';



     

function AppRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
