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
        <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">MDT 500</h3>
                <p>
                 Manned stations terminal integrated with token printer and graphical display help visitors to get their token from the desk terminal system designed with user friendly dashboard with multiple reports provide better operational management.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">SmartQ Software provide extensive function with unique feature.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Flexible and scalable software architecture makes it suitable for all Queue management needs.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Manned} alt="Validator" className="img-fluid" />
            </div>
          </div>


          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">MDT 500</h3>
                <p>
                 Manned stations terminal integrated with token printer and graphical display help visitors to get their token from the desk terminal system designed with user friendly dashboard with multiple reports provide better operational management.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">SmartQ Software provide extensive function with unique feature.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Flexible and scalable software architecture makes it suitable for all Queue management needs.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Manned} alt="Validator" className="img-fluid" />
            </div>
          </div>


          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">MDT 500</h3>
                <p>
                 Manned stations terminal integrated with token printer and graphical display help visitors to get their token from the desk terminal system designed with user friendly dashboard with multiple reports provide better operational management.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">SmartQ Software provide extensive function with unique feature.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Flexible and scalable software architecture makes it suitable for all Queue management needs.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Manned} alt="Validator" className="img-fluid" />
            </div>
          </div>







          {/* Slide 1 */}
         
        </Slider>
      </Container>
    </>
  );
};

export default Controller;
