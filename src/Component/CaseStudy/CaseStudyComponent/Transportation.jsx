import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import StadiumImg from '../CaseStudyImage/TRANSPORTATION.png';

const Transportation = () => {
  const footerItems = [
    { value: '9', label: 'Transportation' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Efficient parking and access control systems are essential for managing high traffic, ensuring authorized entry, and optimizing space. Enhanced indoor security systems safeguard passengers and staff, maintaining a secure and organized environment.",
        "Patiala Bus Stand is equipped with Houston Systems' secure parking and vehicle access control for efficient space management. Indoor security includes Houston's pedestrian management systems for safe access for passengers and staff.",
      ]}
      footerItems={footerItems}
      image={StadiumImg}
      placeholder="Transportation"
    />
  );
};

export default Transportation;
