import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './QESolution.css';
import Registration from './../../QMANGEIMG/massimg/Registration kiosk 1.png';
import QDisplay from './../../QMANGEIMG/massimg/Q Display 1.png';
import Q_display from './../../QMANGEIMG/massimg/Q Display2 1.png';
import software from './../../QMANGEIMG/massimg/software 2 1 (1).png';


import Exit  from './../../QMANGEIMG/massimg/Exit Kiosk 1.png';
import Manned  from './../../QMANGEIMG/massimg/Manned Visitor Desk 1 (1).png';

// import barrier from './../../PGSSOLUTIONIMG/barrier.png';
import identification from './../../QMANGEIMG/massimg/identification.png';
import tariff from './../../QMANGEIMG/massimg/tariff.png';

const Controller = () => {  
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
    <>

      <Container className="container">
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">SmartQ 50</h3>
                <p>
                   SmartQ Android touch screen self service kiosk provide user friendly interactive pannel to perform quick and smooth Queue management operations SmartQ integration with central management system makes it suitable for large application like hospitals, exhibition  center museum etc.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  In-built printer and scanner allows online and offline registration.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Inteligent microproccessor with in-built camera with AI vision technology.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img style={{height:"270px"}} src={Registration} alt="Validator" className="img-fluid" />
            </div>
          </div>

          {/* Slide 2 (can be customized with different content) */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">TR 100</h3>
                <p>
                Smart token printer integrated with counter display and information screen designed to cater for small and medium queue management applications like banks, post offices, goverement buildings, clinics, insurance offices etc.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Optional integrated graphical display guide users for their token.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Smart integrated controller with versatile configuration.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img style={{height:"270px"}} src={Exit} alt="Validator" className="img-fluid" />
            </div>
          </div>
             {/* slider 3 */}
          

        </Slider>
      </Container>
    </>
  );
};

export default Controller;
