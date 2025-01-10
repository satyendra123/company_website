import React from 'react';
import './Know_More.css'; // Import external CSS file
import image from './Know_MoreImages/image.png';
import line from './Know_MoreImages/Line 1.png';

const Know_More = () => {
  return (
    <div className="know-more-container">
      <div className="know-more-section">
        {/* Left Column */}
        <div className="know-more-left">
          <h6 className="know-more-title blue">Case Study</h6>
          <h6 className="know-more-left-title">
            Airport <img className="line"src={line} alt="Divider" />
          </h6>
        </div>

        {/* Right Column */}
        <div className="know-more-right">
          <div className="know-more-row">
            {/* First Item */}
            <div className="know-more-item">
              <div className="know-more-image">
                <img src={image} alt="Customer Support" />
              </div>
            </div>

            {/* Add more items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Know_More;
