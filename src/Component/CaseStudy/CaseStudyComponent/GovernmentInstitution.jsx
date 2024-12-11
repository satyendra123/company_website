import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import StadiumImg from '../CaseStudyImage/EMBASSY.png';

const GovernmentInstitution = () => {
  const footerItems = [
    { value: '9', label: 'Projects' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Government sectors require robust security and efficient parking solutions to manage high visitor traffic, ensure perimeter safety, streamline vehicle access, and enhance overall operational efficiency and control.",
        "The Supreme Court of India, located in New Delhi, offers 2000 parking spaces with over 7000 daily visitors. The premises are secured with Houston Systems' bollards, UVSS, baggage scanners, DFMD, and RFID-integrated boom barriers. Houston Systems has provided the parking guidance system and support for the last 7 years.",
        "The Delhi High Court, established in 1966, is the second-highest judicial authority in Delhi, handling civil, criminal, and constitutional cases. With 1500 parking spaces and 2500 daily visitors, Houston Systems has implemented a parking and vehicle access solution to ensure secure, smooth traffic flow and optimal space utilization.",
        "Oil India Limited, a key crude oil and natural gas PSU based in Noida, is secured with Houston Systems' RFID boom barriers for vehicle access and flap barriers for personnel. Houston Systems has been serving for 5 years."
      ]}
      footerItems={footerItems}
      image={StadiumImg}
      placeholder="Government Institution"
    />
  );
};

export default GovernmentInstitution;
