import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PgsEsolution.css';
import Combisensor from './../../PGSSOLUTIONIMG/Combisensor.png';
import Splitsensor from './../../PGSSOLUTIONIMG/Splitsensor.png';
import Slotsensor from './../../PGSSOLUTIONIMG/Slotsensor.png';
import identification from './../../PGSSOLUTIONIMG/identification.png';
import tariff from './../../PGSSOLUTIONIMG/tariff.png';

const Sensors = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobileScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const slidesData = [
    {
      title: 'Combi Sensors',
      description:
        'Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking space status',
      image: Combisensor,
      features: [
        {
          icon: identification,
          text: 'Precisely detects vehicle presence and occupancy in parking spaces.',
        },
        {
          icon: tariff,
          text: 'Provides instant status updates to parking systems.',
        },
      ],
    },
    {
      title: 'Split Sensor',
      description:
        'Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking space status',
      image: Splitsensor,
      features: [
        {
          icon: identification,
          text: 'Precisely detects vehicle presence and occupancy in parking spaces.',
        },
        {
          icon: tariff,
          text: 'Provides instant status updates to parking systems.',
        },
      ],
    },
    {
      title: 'Slot Indicator',
      description:
        'Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking space status',
      image: Slotsensor,
      features: [
        {
          icon: identification,
          text: 'Precisely detects vehicle presence and occupancy in parking spaces.',
        },
        {
          icon: tariff,
          text: 'Provides instant status updates to parking systems.',
        },
      ],
    },
  ];

  return (
    <Container className="container">
      <Slider {...sliderSettings}>
        {slidesData.map((slide, index) => (
          <div className="d-flex" key={index}>
            <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}>
              <div>
                <h3 className="ml-4">{slide.title}</h3>
                <p>{slide.description}</p>
                <div className="d-flex flex-column gap-3">
                  {slide.features.map((feature, i) => (
                    <div className="d-flex align-items-center" key={i}>
                      <div className="image-circle">
                        <img src={feature.icon} alt="feature-icon" className="img-fluid" />
                      </div>
                      <p className="ml-3">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-end align-items-center`}
            >
              <img src={slide.image} alt={slide.title} className="img-fluid" style={{ width: '50%' }} />
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Sensors;
