import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import StadiumImg from '../CaseStudyImage/DEFENCE.png';

const Defence = () => {
  const footerItems = [
    { value: '9', label: 'Defence' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "The defence sector faces challenges like securing large perimeters, managing sensitive access points, integrating surveillance systems, and addressing human error and internal threats. ",
        "Houston Systems served as a turnkey provider for the Karwar Naval Base, supplying perimeter security, pedestrian access, indoor security, CCTV surveillance, and GPS navigation systems.",
        "Bhuj Military Station in Gujarat, near the India-Pakistan border, is secured with Houston's Spyker and Shield tyre killers, automatic rising bollards, and Vega boom barriers, forming a three-layer security system at its checkpoints.",
        "Bareilly Cantt is a key military hub for the Indian Army, offering premier training facilities. Houston Systems enhances security here with vehicle access management through Boom Barriers and RFID Readers, along with advanced vehicle security via ANPR Cameras."
      ]}
      footerItems={footerItems}
      image={StadiumImg}
      placeholder="Defence"
    />
  );
};

export default Defence;
