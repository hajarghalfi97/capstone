


import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import Form from './components/Form';
import Chart from './components/Chart';
import Testimonials from './components/Testimonials';
import SuccessPage from './SuccessPage';
import Login from './components/login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    gender: '',
    weight: '',
    goal: '',
  });

  useEffect(() => {
   
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    alert("Congrats! You're now a member. Please log in.");

    
    localStorage.setItem('token', 'sample-token'); 
    setIsAuthenticated(true);

   
    setLoginVisible(true); 
  };

  return (
    <Router>
      <div>
        
        <Navbar 
          setContactVisible={setContactVisible} 
          setAboutVisible={setAboutVisible} 
          contactVisible={contactVisible} 
          aboutVisible={aboutVisible}
          loginVisible={loginVisible}  
          setLoginVisible={setLoginVisible} 
        />
        
        
        {loginVisible && !isAuthenticated && (
          <div className="login-container">
            <h2>Login</h2>
            <Login setIsAuthenticated={setIsAuthenticated} />
          </div>
        )}

       
        {isAuthenticated }

     
        {contactVisible && <Contact />}
        {aboutVisible && <About />}

        <header>
          <h1>Get Fit</h1>
        </header>

        <div className="form-chart-container">
          <Form 
            formData={formData} 
            handleFormChange={handleFormChange} 
            handleFormSubmit={handleFormSubmit} 
          />
          <Chart />
        </div>

        <h2 id="result" style={{ color: 'rgb(184, 32, 32)', textAlign: 'center' }}>
          {formData.name ? `Hello, ${formData.name}!` : 'Please enter your details'}
        </h2>

        <Testimonials />

        <footer>
          <p>© 2025 Get Fit. All rights reserved.</p>
        </footer>

        <Routes>
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
