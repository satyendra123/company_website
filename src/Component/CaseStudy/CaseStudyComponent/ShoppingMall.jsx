import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import AirportImg from '../CaseStudyImage/hotel.png';

const ShoppingMall = () => {
  const footerItems = [
    { value: '9', label: 'Stadium' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Parking chaos in malls causes delays, congestion, and confusion, leading to frustrated drivers and reduced customer satisfaction.",
        "UNITY ONE MALL in Rohini, Delhi, with 900 parking spaces and over 3,000 daily visitors, features Houston Systems' automated parking guidance, vehicle management, and boom barriers for smooth, secure traffic flow.",
        "Lotus Isle in Sector 98, Noida, with 500 parking spaces and over 2,000 daily visitors, is secured by Houston Systems' RFID-integrated boom barriers and pedestrian access tripods, supported for the last three years.",
        "Omaxe Mall in Greater Noida, with 150 shops and 1,000 parking spaces, serves 5,000+ daily visitors. Houston Systems provides RFID-enabled boom and flap barriers for secure access, supporting for two years.",
      ]}
      footerItems={footerItems}
      image={AirportImg}
      placeholder="SHOPPING MALL"
    />
  );
};

export default ShoppingMall;
