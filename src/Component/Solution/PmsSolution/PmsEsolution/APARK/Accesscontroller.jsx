import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PmsEsolution.css';
import Dispenser from './../../PMSSOLUTIONIMG/pmsimg/Dispenser 1.png';
import Server  from './../../PMSSOLUTIONIMG/pmsimg/Server 2.png';
import Tornado from './../../PMSSOLUTIONIMG/pmsimg/Tornado 8 (1).png';
import parki from './../../PMSSOLUTIONIMG/pmsimg/barrier.png';
import Validator_ from './../../PMSSOLUTIONIMG/pmsimg/Validator 2.png';
import zonedisplay from './../../PMSSOLUTIONIMG/pmsimg/Mannual Pay Station 6.png';
import identification from './../../PMSSOLUTIONIMG/pmsimg/identification.png';
import tariff from './../../PMSSOLUTIONIMG/pmsimg/tariff.png';
import Software from './../../PMSSOLUTIONIMG/pmsimg/Uparksoftware.png';
const Sensors = () => {
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
                <h3 className="">TORNADO Parking Barrier</h3>
                <p>
                Durable construction with secure locks ensures protection, while an energy-efficient barrier offers advanced features for demanding parking systems.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Innovative motor technology with the best possible energy efficiency.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Compact control unit with versatile configuration options.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Tornado} alt="Validator" className="img-fluid" />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">PARKI Parking Barrier</h3>
                <p>
                Durable construction with secure locks ensures protection, while an energy-efficient barrier offers advanced features for demanding parking systems.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Innovative motor technology with the best possible energy efficiency.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Compact control unit with versatile configuration options.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={parki} alt="Validator" className="img-fluid" />
            </div>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Sensors;
