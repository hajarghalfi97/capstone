import React from 'react';

const Testimonials = () => (
  <div className="testimonials">
    <h2>What Our Customers Say</h2>
    <div className="testimonial">
      <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="Customer 1" />
      <p>"I never thought I'd be able to lose weight and build muscle at the same time, but with Get Fit's personalized plans, I've achieved more than I ever expected!"</p>
      <b>- Smith Doe</b>
    </div>
    <div className="testimonial">
      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Customer 2" />
      <p>"This program has completely transformed my fitness journey. I'm more confident, healthier, and feel stronger every day!"</p>
      <b>- Lara Smith</b>
    </div>
    <div className="testimonial">
      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Customer 3" />
      <p>"Get Fit made it easy for me to stay on track with my goals. I love how the workouts are challenging but doable!"</p>
      <b>- Mark Jane</b>
    </div>
  </div>
);

export default Testimonials;
