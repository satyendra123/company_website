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
    airportHeading: 'Amritsar International Airport',
    airportLocation: {
      title: 'About the Location',
      text: 'Amritsar International Airport serves as a vital transportation hub in northern India, handling over 10,000 passengers daily. The airport’s strategic location makes it a gateway for international and domestic travelers, necessitating a robust and user-friendly parking management system.'
    },
    airportSolution:[ {
      text: 'PARKSIM Integrated Parking Management ',
      name: 'Name of Solution: '
    },
    {
      text: 'Houston Systems deployed the PARKSIM solution to streamline parking operations at the airport. This system incorporates advanced access control technologies, automated payment terminals, and digital guidance displays. The tailored solution facilitates real-time monitoring of parking space availability and ensures smooth traffic flow within the premises',
      name: 'Solution Description: '
    }
  ],
    airportProducts: [
      'Automated Parking Guidance Systems RFID-Integrated Boom Barriers Manned and Unmanned Payment Terminals'
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
