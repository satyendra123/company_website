import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PgsEsolution.css';
import zonedisplay from './../../PGSSOLUTIONIMG/zonedisplay.png';
import floordisplay from './../../PGSSOLUTIONIMG/floordisplay.png';
import maindisplay from './../../PGSSOLUTIONIMG/maindisplay.png';
import barriertwo from './../../PGSSOLUTIONIMG/barrier2.png';
import identification from './../../PGSSOLUTIONIMG/identification.png';
import tariff from './../../PGSSOLUTIONIMG/tariff.png';

const Display = () => {
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
              <h3 className="ml-4">Zone Display</h3>
              <p>
                The LED display in Parking Guidance System shows real-time parking space availability, helping users to find open spots quickly.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                    Works seamlessly with parking sensors and controllers
                  </p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                    Displays instant updates based on sensor data
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-end align-items-center`}>
            <img src={zonedisplay} alt="Validator" className="img-fluid" style={{ width: isMobileScreen ? '80%' : '50%' }} />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="d-flex">
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}>
            <div>
              <h3 className="ml-4">Floor Display</h3>
              <p>
                The LED display in Parking Guidance System shows real-time parking space availability, helping users to find open spots quickly.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Works seamlessly with parking sensors and controllers</p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Displays instant updates based on sensor data</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-end align-items-center`}>
            <img src={floordisplay} alt="Validator" className="img-fluid" style={{ width: isMobileScreen ? '80%' : '50%' }} />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="d-flex">
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}>
            <div>
              <h3 className="ml-4">Main Display</h3>
              <p>
                The LED display in Parking Guidance System shows real-time parking space availability, helping users to find open spots quickly.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Works seamlessly with parking sensors and controllers</p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Displays instant updates based on sensor data</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-end align-items-center`}>
            <img src={maindisplay} alt="Validator" className="img-fluid" style={{ width: isMobileScreen ? '80%' : '50%' }} />
          </div>
        </div>
      </Slider>
    </Container>
  );
};

export default Display;
