import React from 'react';
import './Goa.css'; // Import external CSS file
import goaimg from "./Goa_Images/Goa.png";
import line from "./Goa_Images/Line 2.png";

const Goa = () => {
  return (
    <>
<div className="goa-heading-container">
  <img src={line} alt="Line" className="goa-line-img" />
  <h6 className="goa-heading">Goa International Airport</h6>
</div>
    <div className="International-container d-flex gap-4">
     
      <div className="content-container d-flex gap-4">
        {/* Left Column */}
        <div className="goa-left-content">
          <h1 className="goa-title">Name of Solution</h1>
          <p className='goa-description'>PARKSIM Integrated Parking Management System</p>

          <h1 className="goa-title">About the Location</h1>
          <p className='goa-description'>Goa International Airport, located in the vibrant state of Goa, is a critical hub for domestic and international travel, welcoming over 15,000 passengers daily. Known for its heavy tourist influx, the airport’s parking infrastructure must accommodate high traffic volumes while ensuring a seamless user experience.</p>

          <h1 className="goa-title">Installed Products</h1>
          <ul>
            <li className='goa-description'>6 Entry Lanes and 4 Exit Lanes with hybrid and express access points</li>
            <li className='goa-description'>Manned and Unmanned Payment Terminals.</li>
            <li className='goa-description'>Entry Guiding Digital Display Systems for real-time parking status.</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="goa-right-content ">
          <h1 className="goa-title">Solution Description</h1>
          <p className='goa-description'>To address the complex parking demands, Houston Systems implemented the advanced PARKSIM solution. This system integrates hybrid access points, express lanes, and dynamic digital displays for real-time updates on parking availability, The design ensures both operational efficiency and user convenience, leveraging automation to minimize delays and optimize parking space utilization.</p>
        </div>
      </div>

      <div className="goa-image-container">
        <img src={goaimg} alt="Goa International Airport" className="img-fluid" />
      </div>
    </div>
    </>
  );
};

export default Goa;
