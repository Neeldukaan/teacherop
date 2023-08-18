import React from 'react';

const HeroSection = () => {
  return (
    <div className="d-flex justify-content-between my-5">
      <div>
        <h1>Welcome to Teacherop</h1>
        <p>Start your learning journey now!</p>
      </div>
      <div>
        {/* Add your sketch image */}
        <img src="/path-to-your-sketch-image.png" alt="Sketch" className="img-fluid" />
      </div>
    </div>
  );
};

export default HeroSection;
