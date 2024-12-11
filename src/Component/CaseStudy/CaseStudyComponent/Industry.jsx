import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import StadiumImg from '../CaseStudyImage/factory.png';

const Industry = () => {
  const footerItems = [
    { value: '9', label: 'Industry' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Manufacturing plants Api's or factories  face challenges in maintaining efficiency, managing logistics, ensuring security, and adhering to safety standards. Advanced systems that streamline access control and monitor material flow play a crucial role in improving both security and operational efficiency.",
        "Birla Cement, part of the Aditya Birla Group, operates a major plant in Chittorgarh, Rajasthan. Houston Systems has provided boom barriers and access control, integrated with the weighbridge for efficient entry and exit.",
        "Shree Cement, India’s 3rd largest by capacity and 2nd by market capitalization, has plants across multiple states. Houston Systems provides boom barriers and integrated access control for weighbridge entry and exit lanes.",
        "Aditya Flaxipack, based in Kanpur, specializes in packaging solutions including laminated films, flexible pouches, and customized products. The facility is secured with a Boom Barrier access control system for vehicles and Turnstile with Biometric integration for employees and visitors."
      ]}
      footerItems={footerItems}
      image={StadiumImg}
      placeholder="Industry"
    />
  );
};

export default Industry;
