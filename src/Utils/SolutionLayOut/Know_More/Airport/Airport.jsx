import React from 'react';
import './Airport.css'; // Import external CSS file
import airportimages from "./AirportImages/Airport.png";
import line from "./AirportImages/Line 2.png";

const airport = () => {
  return (
    <>
<div className="airport-heading-container">
  <img src={line} alt="Line" className="airport-line-img" />
  <h6 className="airport-heading">airport International Airport</h6>
</div>
    <div className="International-container d-flex gap-4">
    <div className="airport-image-container">
        <img src={airportimages} alt="airport International Airport" className="img-fluid" />
      </div>
      <div className="content-container d-flex gap-4">
        {/* Left Column */}
        <div className="airport-left-content">
         
          <h1 className="airport-title">About the Location</h1>
          <p className='airport-description'>airport International Airport, located in the vibrant state of airport, is a critical hub for domestic and international travel, welcoming over 15,000 passengers daily. Known for its heavy tourist influx, the airport’s parking infrastructure must accommodate high traffic volumes while ensuring a seamless user experience.</p>

        
        </div>

        {/* Right Column */}
        <div className="airport-right-content ">
          <h1 className="airport-title">Solution Description</h1>
          <p className='airport-description'>To address the complex parking demands, Houston Systems implemented the advanced PARKSIM solution. This system integrates hybrid access points, express lanes, and dynamic digital displays for real-time updates on parking availability, The design ensures both operational efficiency and user convenience, leveraging automation to minimize delays and optimize parking space utilization.</p>
        
          <h1 className="airport-title">Name of Solution</h1>
          <p className='airport-description'>PARKSIM Integrated Parking Management System</p>

          <h1 className="airport-title">About the Location</h1>
          <p className='airport-description'>airport International Airport, located in the vibrant state of airport, is a critical hub for domestic and international travel, welcoming over 15,000 passengers daily. Known for its heavy tourist influx, the airport’s parking infrastructure must accommodate high traffic volumes while ensuring a seamless user experience.</p>

          <h1 className="airport-title">Installed Products</h1>
          <ul>
            <li className='airport-description'>6 Entry Lanes and 4 Exit Lanes with hybrid and express access points</li>
            <li className='airport-description'>Manned and Unmanned Payment Terminals.</li>
            <li className='airport-description'>Entry Guiding Digital Display Systems for real-time parking status.</li>
          </ul>
        </div>
      </div>

      
    </div>
    </>
  );
};

export default airport;
