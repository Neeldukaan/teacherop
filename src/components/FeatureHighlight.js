import React from 'react';

const FeatureHighlight = () => {
  return (
    <div className="my-5">
      <h2>Features</h2>
      <div className="d-flex justify-content-around flex-wrap">
        <div className="card mb-3" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Feature 1</h5>
            <p className="card-text">Description for feature 1.</p>
          </div>
        </div>
        <div className="card mb-3" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Feature 2</h5> {/* Adjusted this to Feature 2 for distinction */}
            <p className="card-text">Description for feature 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
