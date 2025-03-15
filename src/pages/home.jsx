import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from '../components/Contact';
import About from '../components/About';
import Navbar from '../components/NavBar';
import Form from '../components/Form';
import Chart from '../components/Chart';
import Testimonials from '../components/Testimonials';

import '../styleSheets/App.css';

function Home() {
  const [contactVisible, setContactVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    gender: '',
    weight: '',
    goal: '',
  });

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/secondPage'); 
  };

  return (
    
    <div>
       <Navbar setContactVisible={setContactVisible} setAboutVisible={setAboutVisible} contactVisible={contactVisible} aboutVisible={aboutVisible} /> 
      
       

        {contactVisible && <Contact /> }
        {aboutVisible && <About />} 
        
        <header>
          <h1>Get Fit</h1>
        </header>

        <div className="form-chart-container">
          <Form formData={formData} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
          <Chart />
        </div>
        

        <h2 id="result" style={{ color: 'rgb(184, 32, 32)', textAlign: 'center' }}>
          {formData.name ? `Hello, ${formData.name}!` : 'Please enter your details'}
        </h2>

        <Testimonials />

        <footer>
          <p>© 2025 Get Fit. All rights reserved.</p>
        </footer>
      </div>
      
  );
}

export default Home;
