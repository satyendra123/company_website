import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import AirportImg from '../CaseStudyImage/hospital.png';

const Hospital = () => {
  const footerItems = [
    { value: '9', label: 'Stadium' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Hospitals face challenges with security and parking, such as managing unauthorized access, ensuring safety during emergencies, handling high foot traffic, and limited parking space. Traffic congestion, real-time parking updates, and accessible payment systems are crucial for smooth operations.",
        "Rajeev Gandhi Cancer Institute in New Delhi is a top cancer hospital, serving over 15,000 patients daily. Its parking system, with 1,000 spaces and over 3,000 daily visitors, features 8 entry and 10 exit lanes, hybrid access points, and real-time vacancy displays. The parking is managed by a robotic system with both manned and unmanned payment terminals.",
      ]}
      footerItems={footerItems}
      image={AirportImg}
      placeholder="HOSPITAL"
    />
  );
};

export default Hospital;
