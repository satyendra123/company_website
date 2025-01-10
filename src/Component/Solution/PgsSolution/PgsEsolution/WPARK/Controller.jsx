import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PgsEsolution.css';
import Wparkzonecontroller from './../../PGSSOLUTIONIMG/Wparkzonecontroller.png';
import barrier from './../../PGSSOLUTIONIMG/barrier.png';
import Paystation from './../../PGSSOLUTIONIMG/Paystation.png';
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
          <div
            className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}
          >
            <div>
              <h3 className="">Parking Guidance Controller</h3>
              <p>
                The controller is the acquisition and control centre of the entire intelligent
                Parking Guidance System. It updates real-time data on the parking guidance display,
                enabling vehicle guidance functionality.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img
                      src={identification}
                      alt="Identification"
                      className="img-fluid"
                    />
                  </div>
                  <p className="ml-3">Manages and coordinates all system components.</p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Ensures seamless real-time data processing.</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-end align-items-center`}
          >
            <img
              src={Wparkzonecontroller}
              alt="Parking Guidance Controller"
              className="img-fluid"
              style={{ height:"200px" }}
            />
          </div>
        </div>

        <div className="d-flex">
          <div
            className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}
          >
            <div>
              <h3 className="">Parking Guidance Controller</h3>
              <p>
                The controller is the acquisition and control centre of the entire intelligent
                Parking Guidance System. It updates real-time data on the parking guidance display,
                enabling vehicle guidance functionality.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img
                      src={identification}
                      alt="Identification"
                      className="img-fluid"
                    />
                  </div>
                  <p className="ml-3">Manages and coordinates all system components.</p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Ensures seamless real-time data processing.</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-end align-items-center`}
          >
            <img
              src={Wparkzonecontroller}
              alt="Parking Guidance Controller"
              className="img-fluid"
              style={{ width: '50%' }}
            />
          </div>
        </div>

        <div className="d-flex">
          <div
            className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}
          >
            <div>
              <h3 className="">Parking Guidance Controller</h3>
              <p>
                The controller is the acquisition and control centre of the entire intelligent
                Parking Guidance System. It updates real-time data on the parking guidance display,
                enabling vehicle guidance functionality.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img
                      src={identification}
                      alt="Identification"
                      className="img-fluid"
                    />
                  </div>
                  <p className="ml-3">Manages and coordinates all system components.</p>
                </div>

                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Ensures seamless real-time data processing.</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-end align-items-center`}
          >
            <img
              src={Wparkzonecontroller}
              alt="Parking Guidance Controller"
              className="img-fluid"
              style={{ width: '50%' }}
            />
          </div>
        </div>





        {/* Slide 2 */}
      </Slider>
    </Container>
  );
};

export default Controller;
