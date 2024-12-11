import React, { useState } from 'react';
import './CaseStudyBody.css'; // Import CSS file for styling
import AirportIcon from '../CaseStudyIcons/airport.svg';
import ShoppingMallIcon from '../CaseStudyIcons/shopping_mall.svg';
import StadiumIcon from '../CaseStudyIcons/stadium.svg';
import HotelIcon from '../CaseStudyIcons/hotel.svg';
import HospitalIcon from '../CaseStudyIcons/hospital.svg';
import OfficeIcon from '../CaseStudyIcons/office.svg';
import FactoryIcon from '../CaseStudyIcons/factory.svg';
import CityIcon from '../CaseStudyIcons/city.svg';

import GovernmentInstitutionIcon from '../CaseStudyIcons/government.png';
import DefenceIcon from '../CaseStudyIcons/defence.png';
import CorporateIcon from '../CaseStudyIcons/corporate.png';
import IndustryIcon from '../CaseStudyIcons/industry.png';
import EducationalInstituteIcon from '../CaseStudyIcons/education.png';
import TransportationIcon from '../CaseStudyIcons/transportation.png';


// Case Study Components
import Airport from '../CaseStudyComponent/Airport';
import ShoppingMall from '../CaseStudyComponent/ShoppingMall';
import Stadium from '../CaseStudyComponent/Stadium';
import Hotel from '../CaseStudyComponent/Hotel';
import Hospital from '../CaseStudyComponent/Hospital';
import Office from '../CaseStudyComponent/Office';
import Factory from '../CaseStudyComponent/Factory';
import City from '../CaseStudyComponent/City';

import Corporate from '../CaseStudyComponent/Corporate';
import Defence from '../CaseStudyComponent/Defence';
import EducationalInstitute from '../CaseStudyComponent/EducationalInstitute';
import GovernmentInstitution from '../CaseStudyComponent/GovernmentInstitution';
import Industry from '../CaseStudyComponent/Industry';
import Transportation from '../CaseStudyComponent/Transportation';



const CaseStudyBody = () => {
  const [activePoint, setActivePoint] = useState(0); // State to track active point
  const [hoverPoint, setHoverPoint] = useState(-1); // State to track hover point

  const points = [
    { icon: AirportIcon, label: 'Airport', component: <Airport /> },
    { icon: GovernmentInstitutionIcon, label: 'Government Institution', component: <GovernmentInstitution /> },
    { icon: DefenceIcon, label: 'Defence', component: <Defence /> },
    { icon: CorporateIcon, label: 'Corporate', component: <Corporate /> },
    { icon: IndustryIcon, label: 'Industry', component: <Industry /> },
    { icon: EducationalInstituteIcon, label: 'Educational Institute', component: <EducationalInstitute /> },
    { icon: TransportationIcon, label: 'Transportation', component: <Transportation /> },
    { icon: StadiumIcon, label: 'Stadium', component: <Stadium /> },
    // { icon: ShoppingMallIcon, label: 'Shopping Mall', component: <ShoppingMall /> },
    // { icon: HotelIcon, label: 'Hotel', component: <Hotel /> },
    // { icon: HospitalIcon, label: 'Hospital', component: <Hospital /> },
    // { icon: OfficeIcon, label: 'Office', component: <Office /> },
    // { icon: FactoryIcon, label: 'Factory', component: <Factory /> },
    // { icon: CityIcon, label: 'City', component: <City /> },

  ]; // Define the icons, labels, and their corresponding components

  // Function to handle click on a point
  const handlePointClick = (pointIndex) => {
    setActivePoint(pointIndex);
  };

  // Guard against accessing points[activePoint] when it's undefined
  if (points.length === 0 || activePoint < 0 || activePoint >= points.length) {
    return null; // Or handle the edge case appropriately
  }

  return (
    <div className="horizontal-line-container mt-5">
      {/* Horizontal line with points */}
      <div className="horizontal-line">
        {points.map((point, index) => (
          <div key={index} className="point-container">
            <div
              className="point"
              onClick={() => handlePointClick(index)}
              onMouseEnter={() => setHoverPoint(index)}
              onMouseLeave={() => setHoverPoint(-1)}
            >
              <img
                src={point.icon} // Use the icon path from the points array
                alt={`Point ${index + 1}`}
                className={`point ${activePoint === index ? 'active' : ''}`}
              />
              {(hoverPoint === index || activePoint === index) && (
                <div className="point-label">{point.label}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Component display section */}
      <div className="case-study-component mt-3">
        {points[activePoint].component}
      </div>
    </div>
  );
};

export default CaseStudyBody;
