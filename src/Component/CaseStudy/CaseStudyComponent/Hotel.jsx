import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import AirportImg from '../CaseStudyImage/hotel.png';

const Hotel = () => {
  const footerItems = [
    { value: '9', label: 'Stadium' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Hotels face security and parking challenges, including theft risks, limited capacity, access control issues, outdated management systems, long valet wait times, and compliance with regulations. These factors can frustrate guests and increase operational costs, impacting overall profitability.",
        "Radisson Hotel, known in India and globally, uses Houston Systems' Boom Barriers with RFID for secure parking and indoor security with DFMD, baggage scanners, and pedestrian access management.",
      ]}
      footerItems={footerItems}
      image={AirportImg}
      placeholder="HOTEL"
    />
  );
};

export default Hotel;
