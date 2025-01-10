import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PgsEsolution.css';
import Vparkcombisensor from './../../PGSSOLUTIONIMG/Vparkcombisensor.png';
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

  return (
    <Container className="container">
      <Slider {...sliderSettings}>
        {/* Slide 1 */}
        <div className="d-flex">
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}>
            <div>
              <h3 className="">Combi Camera Sensor</h3>
              <p>
                Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking space status.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                    Precisely detects vehicle presence and occupancy in parking spaces.
                  </p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                    Provides instant status updates to parking systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-center align-items-center`}>
            <img src={Vparkcombisensor} alt="Sensor" className="img-fluid" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="d-flex">
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}>
            <div>
              <h3 className="">Combi Camera Sensor</h3>
              <p>
                Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking space status.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                    Precisely detects vehicle presence and occupancy in parking spaces.
                  </p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                    Provides instant status updates to parking systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-center align-items-center`}>
            <img src={Vparkcombisensor} alt="Sensor" className="img-fluid" />
          </div>
        </div>
      </Slider>
    </Container>
  );
};

export default Sensors;
