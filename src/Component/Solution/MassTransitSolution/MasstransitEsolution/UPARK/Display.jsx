import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Masstrangist.css';
import Controllerimg from './../../MASSTRANSITSOLUTIONIMG/massimg/T20-Validator 1.png';
import Turner from './../../MASSTRANSITSOLUTIONIMG/massimg/Ticket accepter2 1.png';
// import barrier from './../../PGSSOLUTIONIMG/barrier.png';
import identification from './../../MASSTRANSITSOLUTIONIMG/massimg/identification.png';
import tariff from './../../MASSTRANSITSOLUTIONIMG/massimg/tariff.png';

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
                <h3 className="">T 20 Stadium Terminal</h3>
                <p>
                Smart Scanning system for quick scanning fanfold type barcode entry tickets. Designed to handle large operations with smooth access mechanism like big events, stadiums etc.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">In-built access card reader and scanner with offline work capability</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Intelligent controller with versatile configuration and buffer memory.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Turner} alt="Validator" className="img-fluid" />
            </div>
          </div>
          {/* Slide 1 */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">S 20 Pass Terminal</h3>
                <p>
                Android touch screen scanning module specially designed for Mass transit application. 
                User friendly graphical display with smart key features like voice prompt, in-built memory, 
                offline work capability make it more suitable for Stadiums.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  In-built access card reader with intelligent scanning module.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  In-built camera with AI Vision technology for more secured operations
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Controllerimg} alt="Validator" className="img-fluid" />
            </div>
          </div>

          {/* Slide 2 (can be customized with different content) */}
         
       
        </Slider>
      </Container>
    </>
  );
};

export default Controller;
