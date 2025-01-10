import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './QESolution.css';
import Registration from './../../QMANGEIMG/massimg/Registration kiosk 1.png';
import QDisplay from './../../QMANGEIMG/massimg/Q Display 1.png';
import QDisplay1 from './../../QMANGEIMG/massimg/Q Display2 1.png';

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
                <h3 className="">Information Display
                </h3>
                <p>
                  RGB matrix display and LD/LCD screen in custom size or designe to provide Queue information in waiting areas real time status update keep visitors in Queue upadated all the time.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Wireless Comunication reduce labour cast and makes it easy to install </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">In-built buzzer and speaker makes it more convinent for visitors </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={QDisplay} alt="Validator" className="img-fluid" />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Token Counter Display
                </h3>
                <p>
                Wireless RGB Matrix display designed for indore applications to work with keypad device independently
                 and can also work in integration with SmartQ management system.  
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Wireless Comunication reduce labour cast and makes it easy to install.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">In-built buzzer and speaker makes it more convinent for visitors.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={QDisplay1} alt="Validator" className="img-fluid" />
            </div>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Controller;
