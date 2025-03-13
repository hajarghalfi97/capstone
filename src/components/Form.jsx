import React from 'react';

const Form = ({ formData, handleFormChange, handleFormSubmit }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(e); 
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />

      <label>Age:</label>
      <input type="text" name="age" value={formData.age} onChange={handleFormChange} required />

      <label>Height (ft'in):</label>
      <input type="text" name="height" value={formData.height} onChange={handleFormChange} required />

      <label>Gender:</label>
      <select name="gender" value={formData.gender} onChange={handleFormChange} required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Weight (lb):</label>
      <input type="text" name="weight" value={formData.weight} onChange={handleFormChange} required />

      <label>Goal:</label>
      <select name="goal" value={formData.goal} onChange={handleFormChange} required>
        <option value="Lose Weight">Lose Weight</option>
        <option value="Gain Muscle">Gain Muscle</option>
        <option value="Lose Weight & Gain Muscle">Lose Weight & Gain Muscle</option>
        <option value="Flexibility & Mobility">Flexibility & Mobility</option>
        <option value="Endurance Training">Endurance Training</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;


