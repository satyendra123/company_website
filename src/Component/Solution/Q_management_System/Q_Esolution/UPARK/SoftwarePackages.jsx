import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './QESolution.css';
import software from './../../QMANGEIMG/massimg/software 2 1 (1).png';
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
                <h3 className="">SmartQ
                </h3>
                <p>
                SmartQ web based applications designed to perform multiple task seamlessly user friendly dashboard with simplified architecture help to manage overall operations system perform graphical representaional with log event alarm management.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Graphical and analytical reports with multiple formates.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Remote management, monitoring, upgradation, trouble shoting etc.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={software} alt="Validator" className="img-fluid" />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Software

                </h3>
                <p>
                Pedestrian gates with versatile designs and robust, weatherproof structures are perfect for indoor and outdoor mass transit applications, such as stadiums, museums, amusement parks, metros, and mobility systems.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">In-built Mi-fare access card.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Smart controller with inbuilt memory.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={software} alt="Validator" className="img-fluid" />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Software

                </h3>
                <p>
                Pedestrian gates with versatile designs and robust, weatherproof structures are perfect for indoor and outdoor mass transit applications, such as stadiums, museums, amusement parks, metros, and mobility systems.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">In-built Mi-fare access card.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Smart controller with inbuilt memory.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={software} alt="Validator" className="img-fluid" />
            </div>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Controller;
