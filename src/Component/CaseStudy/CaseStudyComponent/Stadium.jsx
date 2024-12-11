import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import StadiumImg from '../CaseStudyImage/stadium.png';

const Stadium = () => {
  const footerItems = [
    { value: '9', label: 'Stadium' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Stadiums face significant security challenges, including managing large crowds, controlling access to prevent unauthorized entry, ensuring efficient screening without delays, addressing terrorist threats, handling unruly behavior among fans",
        "Cricket  Stadium in Mullanpur, near Chandigarh, has a 30,000 seating capacity and modern amenities, including floodlights for day-night matches. Houston Systems provides security with full-height turnstiles and biometric access integrated with QR code scanning for efficient visitor management.",
      ]}
      footerItems={footerItems}
      image={StadiumImg}
      placeholder="STADIUM"
    />
  );
};

export default Stadium;
