import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PgsEsolution.css';
import Controllerimg from './../../PGSSOLUTIONIMG/Controller.png';
import barrier from './../../PGSSOLUTIONIMG/barrier.png';
import identification from './../../PGSSOLUTIONIMG/identification.png';
import tariff from './../../PGSSOLUTIONIMG/tariff.png';

const Controller = () => {
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
              <h3 className="">Parking Guidance Controllers</h3>
              <p>
                The controller is the acquisition and control centre of the entire intelligent Parking Guidance System.
                It updates real-time data on the parking guidance display, enabling vehicle guidance functionality.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Manages and coordinates all system components.</p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Continuously updates parking availability information.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-center align-items-center`}>
               <img style={{ height: "60%" }} src={Controllerimg} alt="Validator" className="img-fluid" />
                     </div>

        </div>

        {/* Slide 2 (can be customized with different content) */}
        <div className="d-flex">
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}>
            <div>
              <h3 className="">Parking Guidance Controllers</h3>
              <p>
                The controller is the acquisition and control centre of the entire intelligent Parking Guidance System.
                It updates real-time data on the parking guidance display, enabling vehicle guidance functionality.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Manages and coordinates all system components.</p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Continuously updates parking availability information.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-center align-items-center`}>
               <img style={{ height: "60%" }} src={Controllerimg} alt="Validator" className="img-fluid" />
                     </div>
        </div>
      </Slider>
    </Container>
  );
};

export default Controller;
