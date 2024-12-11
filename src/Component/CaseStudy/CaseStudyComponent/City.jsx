import React from 'react';
import CaseStudyComponent from '../../../Utils/CaseStudyComponent/CaseStudyComponent';
import AirportImg from '../CaseStudyImage/CITY.png';

const City = () => {
  const footerItems = [
    { value: '9', label: 'Stadium' },
    { value: '115', label: 'Products', middle: true },
    { value: '3+', label: 'Years' }
  ];

  return (
    <CaseStudyComponent 
      // title="For easily managing large numbers"
      description={[
        "Description 1",
        "Description 2",
        "Description 3",
        "Description 4",
        "Description 5",
      ]}
      footerItems={footerItems}
      image={AirportImg}
      placeholder="CITY"
    />
  );
};

export default City;
