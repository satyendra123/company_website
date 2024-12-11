import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import AirportImg from '../CaseStudyImage/CORPORATE.png';

const Office = () => {
  const footerItems = [
    { value: '9', label: 'Stadium' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Corporate offices face challenges like managing access, and handling limited parking with traffic congestion. Smart security and parking solutions are essential for efficient operations.",
        "Chetu, a global software development company in Noida's Sector 63, accommodates 2,000 employees and over 400 daily visitors. Houston Systems has provided RFID-integrated boom barriers for vehicle access and flap barriers for pedestrian management, ensuring secure access for the past four years.",
        "Barco, the largest global software R&D center located in Noida's Sector 64, is fully equipped with flap barriers and ESD machines for pedestrian access management, provided by Houston Systems, also offered service and support for the past five years.",
        "Acidaes Solutions Pvt. Ltd., a cloud software provider in Noida's Sector 62, manages 1,000 employees and 200 visitors daily. The premises use RFID-integrated boom barriers and flap barriers for secure access, supplied and supported by Houston Systems for the past two years.",
      ]}
      footerItems={footerItems}
      image={AirportImg}
      placeholder="OFFICE"
    />
  );
};

export default Office;
