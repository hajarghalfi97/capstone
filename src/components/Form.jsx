

import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ formData, handleFormChange, handleFormSubmit }) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(e); 

   
    alert("Congratulations, you're a member now! Please login.");

    navigate('/login');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleFormChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleFormChange}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleFormChange}
        required
      />

      <label>Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleFormChange}
        required
      />

      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleFormChange}
        required
      />

      <label>Gender:</label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleFormChange}
        required
      >
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Goal:</label>
      <select
        name="goal"
        value={formData.goal}
        onChange={handleFormChange}
        required
      >
        <option value="Lose Weight">Lose Weight</option>
        <option value="Gain Muscle">Gain Muscle</option>
        <option value="Lose Weight & Gain Muscle">Lose Weight & Gain Muscle</option>
        <option value="Flexibility & Mobility">Flexibility & Mobility</option>
        <option value="Endurance Training">Endurance Training</option>
      </select>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
