import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import StadiumImg from '../CaseStudyImage/INSTITUTE.png';

const EducationalInstitute = () => {
  const footerItems = [
    { value: '9', label: 'Projects' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Large institutions require advanced security and access control systems to manage high traffic, ensure authorized entry, safeguard facilities, and maintain a secure environment. Efficient solutions also help optimize parking and streamline daily operations.",
        "IIT Kanpur, a top engineering institute and research centre, offers premier programs for all levels. With 2500 parking spaces and 6000 daily visitors, Houston Systems provides RFID boom barriers for vehicle access, along with baggage scanners, DFMDs, and pedestrian access control for indoor security.",
        "IIT Delhi is renowned for its academic programs and research in engineering, science, and technology. Houston Systems provides boom barriers with access control for secure vehicle entry, along with DFMDs, baggage scanners, and flap tiles for managing indoor security and pedestrian access.",
        "Learner International School in Greater Noida focuses on holistic education, fostering creativity and critical thinking. Houston Systems provides boom barriers with RFID access control for secure vehicle entry and flap barriers for managing access for authorized personnel and visitors."
      ]}
      footerItems={footerItems}
      image={StadiumImg}
      placeholder="Educational Institute"
    />
  );
};

export default EducationalInstitute;
