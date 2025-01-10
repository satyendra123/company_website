import React from 'react';
import KnowMain from '../../../../Utils/SolutionLayOut/Know_More/Know_Main/KnowMain';
import caseStudyImage from './CaseStudyImages/image.png'; // Your image imports
import airportImage from './CaseStudyImages/Airport.png'; // Your airport image import
import Goa from './CaseStudyImages/Goa.png'; // Your airport image import
import line from "./CaseStudyImages/Line 2.png"
const KnowMore = () => {
  // Case Study Data
  const caseStudyDetails = {
    heading: 'Goa International Airport',
    leftContent: [
      {
        title: 'Name of Solution',
        text: [
          'PARKSIM Integrated Parking Management System'
        ]
      },
      {
        title: 'About the Location',
        text: 'Goa International Airport, located in the vibrant state of Goa, is a critical hub for domestic and international travel, welcoming over 15,000 passengers daily. Known for its heavy tourist influx, the airport’s parking infrastructure must accommodate high traffic volumes while ensuring a seamless user experience.'
      },
      {
        title: 'Installed Products',
        text: '6 Entry Lanes and 4 Exit Lanes with hybrid and express access points.Manned and Unmanned Payment Terminals.try Guiding Digital Display Systems for real-time parking status.'
      }
    ],
    rightContent: [
      {
        title: 'Solution Description',
        text: 'To address the complex parking demands, Houston Systems implemented the advanced PARKSIM solution. This system integrates hybrid access points, express lanes, and dynamic digital displays for real-time updates on parking availability, The design ensures both operational efficiency and user convenience, leveraging automation to minimize delays and optimize parking space utilization.'
      }
    ],
    image: Goa, // Path to your case study image
    products: [
      'RFID System', 'ANPR Cameras', 'Real-time Digital Display'
    ]
  };

  // Airport Details Data
  const airportDetails = {
    airportHeading: 'International Airport',
    airportLocation: {
      title: 'About the Location',
      text: 'The airport is a major hub for international and domestic travel, serving thousands of passengers daily.'
    },
    airportSolution: {
      text: 'PARKSIM was implemented to streamline parking operations, offering automated entry and exit points.',
      name: 'PARKSIM Integrated Parking Management System'
    },
    airportProducts: [
      'Entry Lanes with RFID Access', 'Unmanned Payment Terminals', 'Digital Display Systems'
    ],
    airportImage: airportImage, // Path to your airport image
  };

  return (
    <div>
      <KnowMain
        caseStudyTitle="Case Study"
        caseStudyLocation="Airports"
        caseStudyImage={{
          primary: caseStudyImage,
          divider: line
        }}
        caseStudyDetails={caseStudyDetails}
        airportDetails={airportDetails}
      />
    </div>
  );
};

export default KnowMore;
