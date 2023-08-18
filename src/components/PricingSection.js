import React from 'react';

const PricingSection = () => {
  return (
    <div className="my-5">
      <h2>Pricing</h2>
      <div className="d-flex justify-content-around">
        <div className="card" style={{width: '18rem'}}>
          <div className="card-header">Basic Plan</div>
          <div className="card-body">
            <h5 className="card-title">$0</h5>
            <p className="card-text">Description of the basic plan.</p>
          </div>
        </div>
        {/* Add more cards for additional plans */}
      </div>
    </div>
  );
};

export default PricingSection;
