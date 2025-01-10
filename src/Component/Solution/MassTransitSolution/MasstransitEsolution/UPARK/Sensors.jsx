import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Masstrangist.css';
import Controllerimg from './../../MASSTRANSITSOLUTIONIMG/massimg/Untitled-2-Recovered 2 (1).png';
import Paystation from './../../MASSTRANSITSOLUTIONIMG/massimg/Paystation.png';
import Turner from './../../MASSTRANSITSOLUTIONIMG/massimg/Turner S200 1 (1).png';
import Premium  from './../../MASSTRANSITSOLUTIONIMG/massimg/Premium 2.png';

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
          {/* Slide 1 */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">FLAPTILE R 180</h3>
                <p>
                Designed for fast, secure, and efficient access control, equipped with advanced sensors and ticket validation technology (smart cards, QR codes, or NFC), our flap barriers integrate seamlessly with modern fare collection systems. Their sleek design and advanced technology make them the perfect solution for high-traffic environments such as:Metro and Train Stations Bus terminals.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  In-built Multiple optical sensors ensure safe and smooth access.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Inteligent Controller with versatile configuration.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img style={{height:"250px"}} src={Controllerimg} alt="Validator" className="img-fluid" />
            </div>
          </div>

          {/* Slide 2 (can be customized with different content) */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">TURNER S 100</h3>
                <p>
                Modern and sleek designed tripod turnstile is perfect
                 for Museums, Exhibitions, Theme park , light rail systems, and smaller 
                 transit terminals. It integrates effortlessly with automated fare collection
                  systems (AFC), offering efficient ticket verification while minimizing fare evasion.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Advanced integrated controller makes it shutable for evry application.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Integrated model with flexible configuration.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img style={{height:"250px"}} src={Turner} alt="Validator" className="img-fluid" />
            </div>
          </div>
             {/* slider 3 */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">AXIS 1100</h3>
                <p>
                Ideal for high-security fare collection zones such as train stations, stadiums, and bus depots, the full-height turnstile ensures unauthorized access prevention while maintaining a smooth and controlled passenger flow.
                 Its durable design makes it a reliable choice for demanding environments.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Stong structured designed ensure better crowd controller.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Integrated barcode reader and smart card reader.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img style={{height:"240px"}}src={Premium} alt="Validator" className="img-fluid" />
            </div>
          </div>
{/* slider 4 */}
        
        </Slider>
      </Container>
    </>
  );
};

export default Controller;
