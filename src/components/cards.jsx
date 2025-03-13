// In components/Card.js
import React, { useState } from 'react';

const Card = ({ title, mealPlan }) => {
  const [showMealPlan, setShowMealPlan] = useState(false);

  const toggleMealPlan = () => {
    setShowMealPlan(!showMealPlan);
  };

  return (
    <div className="card">
      <img src="https://example.com/image.jpg" alt={title} />
      <div className="card-body">
        <button className="toggle-btn">{title}</button>
        <div className="hidden-content">
          <p>Some workout details...</p>
          <button onClick={toggleMealPlan} className="meal-btn">
            {showMealPlan ? 'Hide Meal Plan' : 'Show Meal Plan'}
          </button>
          {showMealPlan && (
            <div className="meal-plan">
              {mealPlan.map((meal, index) => (
                <p key={index}>{meal}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
