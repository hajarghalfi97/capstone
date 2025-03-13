import React, { useState } from 'react';
import '../styleSheets/app2.css';

const SecondPage = () => {
    const [contactVisible, setContactVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [mealPlanVisible, setMealPlanVisible] = useState({});

    const toggleContact = () => setContactVisible(!contactVisible);
    const toggleAbout = () => setAboutVisible(!aboutVisible);
    const toggleMealPlan = (day) => {
        setMealPlanVisible(prev => ({ ...prev, [day]: !prev[day] }));
    };

    return (
        <div>
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a href="https://www.sciencedaily.com/news/health_medicine/fitness/">News</a></li>
                <li><button onClick={toggleContact}>Contact</button></li>
                <li><button onClick={toggleAbout}>About</button></li>
            </ul>

            {contactVisible && (
                <div id="contact">
                    <p><b>Customer Support:</b> <a href="mailto:support@getfitapp.com" style={{ textDecoration: 'underline' }}>support@getfitapp.com</a></p>
                    <p><b>Phone:</b> <a href="tel:+18041234567" style={{ textDecoration: 'underline' }}>+1-804-123-4567</a></p>
                    <p><b>Address:</b> 123 Get Fit Fitness St, Richmond City, Virginia State</p>
                </div>
            )}

            {aboutVisible && (
                <div id="about">
                    <h2>About Us</h2>
                    <p>At Get Fit, we believe that fitness is for everyone. Our platform is designed to help you achieve your goals, whether you're looking to lose weight, gain muscle, or simply live a healthier lifestyle.</p>
                    <p>Founded in 2025, our mission is to empower individuals to take charge of their health and fitness journey.</p>
                </div>
            )}

            <h1>Welcome to Get Fit Journey</h1>
            <h2>Start Your Journey</h2>

            <div className="card-container">
                {["Day 1: Upper Body Strength", "Day 2: Lower Body Strength", "Day 3: Cardio and Core", "Day 4: Active Recovery"].map((day, index) => (
                    <div className="card" key={index}>
                        <img src="https://example.com/image.png" alt="workout" />
                        <div className="card-body">
                            <button className="toggle-btn" onClick={() => toggleMealPlan(index)}> {day} </button>
                            {mealPlanVisible[index] && (
                                <div className="hidden-content">
                                    <p>Push-ups: 3 sets of 12 reps</p>
                                    <p>Pull-ups: 3 sets of 8 reps</p>
                                    <button className="meal-btn" onClick={() => toggleMealPlan(index)}>
                                        {mealPlanVisible[index] ? 'Hide Meal Plan' : 'Show Meal Plan'}
                                    </button>
                                    {mealPlanVisible[index] && (
                                        <div className="meal-plan">
                                            <p>Meal 1: Scrambled Eggs with Avocado</p>
                                            <p>Meal 2: Grilled Chicken Salad</p>
                                            <p>Meal 3: Salmon with Roasted Veggies</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <footer>
                <p>&copy; 2025 Get Fit. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SecondPage;
