import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TollEsolution.css';
import LONGreader from './../../TOLLSOLUTIONIMG/tollimg/LONG RANGE RFID READER 10.png';
import Wayinmotion from './../../TOLLSOLUTIONIMG/tollimg/Way in Motion 1.png';
import Avs from './../../TOLLSOLUTIONIMG/tollimg/AVCS 1.png';

import Mannualpay from './../../TOLLSOLUTIONIMG/tollimg/Mannual Pay Station 8.png';
import Tornado from './../../TOLLSOLUTIONIMG/tollimg/Tornado 9.png';
import UFD from './../../TOLLSOLUTIONIMG/tollimg/UFD 1.png';
import identification from './../../TOLLSOLUTIONIMG/tollimg/identification.png';
import tariff from './../../TOLLSOLUTIONIMG/tollimg/tariff.png';

const Display = () => {
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
                <h3 className="">Weigh In Motion (WIM)</h3>
                <p>
                 Weigh-in-Motion (WIM) System accurately measures the weight of vehicles moving at speeds up to 30 km/h. It uses strong plates with strain gauges attached underneath and high-quality load cells to ensure precise weight readings for every vehicle.              </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Generate One Click Report for All Vehicle

                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Using Intelligent Sensor For Weigh-in-Motion
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wayinmotion} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>



        
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">AVCS </h3>
                <p>
                AVCS ensures accurate vehicle count and classification for correct toll fee assessment. This rugged, low-maintenance system uses infrared sensor technology for high accuracy and reliability, handling growing traffic seamlessly while withstanding harsh environments.</p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Engineered with reliable, industrial-grade components.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Inteligent controller with buffer memory provide more accuracy.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Avs} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>

          
        </Slider>
      </Container>
    </>
  );
};

export default Display;
