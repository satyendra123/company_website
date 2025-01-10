import React from 'react';
import './Who_We.css'; // Import external CSS for styles

const Who_We = () => {
  return (
    <div className="who-we-container">
      <div className="who-we-section">
        {/* Left Column */}
        <div className="who-we-left">
          <h1 className="who-we-title">Who we are and</h1>
          <h1 className="who-we-title"> what we stand for.</h1>
          <button className="who-we-button">Contact Us</button>
        </div>

        {/* Right Column */}
        <div className="who-we-right">
          <p className="who-we-description">
            Since 2015, we've pioneered safety and security automation solutions with unmatched innovation. Our Aim: a world where safety is a reality, not a dream, and businesses flourish free from security anxieties.
          </p>
          <p className="who-we-description">
            We empower all industries with cutting-edge products and solutions that seamlessly integrate, enhance safety, and streamline security. It's not just technology; it's peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who_We;
