import React from 'react';
import KnowMain from '../../../../Utils/SolutionLayOut/Know_More/Know_Main/KnowMain';
import caseStudyImage from './CaseStudyImages/image.png'; // Case study image
import airportImage from './CaseStudyImages/Airport.png'; // Airport image
import Goa from './CaseStudyImages/Goa.png'; // Goa image
import line from "./CaseStudyImages/Line 2.png"; // Divider line image

const KnowMore = () => {
  // Case Study Data
  const caseStudyDetails = {
    heading: 'Supreme Court of India',
    leftContent: [
      {
        title: 'Name of Solution',
        text: ['Advanced Parking and Security System'],
      },
      {
        title: 'About the Location',
        text: 'The Supreme Court of India is the apex judicial authority in the country, handling sensitive legal matters. Its premises require high-level security and parking facilities to cater to a large number of visitors and staff daily.',
      },
      {
        title: 'Installed Products',
        text: 'Bollards and UVSS for Perimeter Security • Parking Guidance Systems • RFID-Integrated Boom Barriers',
      },
    ],
    rightContent: [
      {
        title: 'Solution Description',
        text: 'Houston Systems installed an advanced parking guidance system alongside perimeter security measures. The system optimizes parking utilization and ensures secure access for authorized personnel.',
      },
    ],
    image: Goa, // Path to the case study image
    products: ['RFID System', 'ANPR Cameras', 'Real-time Digital Display'],
  };

  // Airport Details Data
  // const airportDetails = [
  //   {
  //     airportHeading: 'Delhi High Court',
  //     airportLocation: [
  //       {
  //         title: 'Name of Solution',
  //         text: 'Comprehensive Parking and Access Control Solution',
  //       },
  //       {
  //         title: 'About the Location',
  //         text: 'The Delhi High Court is a prominent judicial institution, managing high volumes of visitors and staff daily. Its infrastructure demands seamless parking and access control systems.',
  //       },
  //     ],
  //     airportSolution: {
  //       text: 'Solution Description',
  //       name: 'Houston Systems implemented a parking solution tailored to the Court’s needs, integrating automated payment terminals and RFID-enabled vehicle management for enhanced efficiency and security.',
  //     },
  //     airportProducts: [
  //       'Entry Lanes with RFID Access',
  //       'Unmanned Payment Terminals',
  //       'Digital Display Systems',
  //     ],
  //     airportImage: airportImage, // Path to the airport image
  //   },

  // ];
  const airportDetails = {
    airportHeading: 'Delhi High Court',
    airportLocation: {
      title: 'About the Location',
      text: 'The Delhi High Court is a prominent judicial institution, managing high volumes of visitors and staff daily. Its infrastructure demands seamless parking and access control systems.'
    },
    airportSolution:[ {
      text: 'Comprehensive Parking and Access Control Solution',
      name: 'Name of Solution: '
    },
    {
      text: 'Houston Systems implemented a parking solution tailored to the Court’s needs, integrating automated payment terminals and RFID-enabled vehicle management for enhanced efficiency and security',
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
        caseStudyLocation="Government Institutions"
        caseStudyImage={{
          primary: caseStudyImage,
          divider: line,
        }}
        caseStudyDetails={caseStudyDetails}
        airportDetails={airportDetails}
      />
    </div>
  );
};

export default KnowMore;
