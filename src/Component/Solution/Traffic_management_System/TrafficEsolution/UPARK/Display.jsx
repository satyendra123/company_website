import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Masstrangist.css';
import SIGNAl3 from './../../TRAFFICTRANSITSOLUTIONIMG/massimg/SIGNAL CONTROLLER 1.png';
import Intelligent from './../../TRAFFICTRANSITSOLUTIONIMG/massimg/Intelligent traffic signal controller 1.png';
import signal  from './../../TRAFFICTRANSITSOLUTIONIMG/massimg/signal 1.png';
import signal1   from './../../TRAFFICTRANSITSOLUTIONIMG/massimg/signal1 1.png';

import CMS  from './../../TRAFFICTRANSITSOLUTIONIMG/massimg/CMS 501.png';
// import barrier from './../../PGSSOLUTIONIMG/barrier.png';
import identification from './../../TRAFFICTRANSITSOLUTIONIMG/massimg/identification.png';
import tariff from './../../TRAFFICTRANSITSOLUTIONIMG/massimg/tariff.png';

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
                <h3 className="">TC 50
                </h3>
                <p>
                The backbone of Intelligent Traffic Management Systems (ITMS), these controllers enable real-time monitoring, adaptive signal adjustments, and integration of data from multiple traffic inputs. They optimize traffic flow and reduce waiting times, offering a seamless commuting experience.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Continuously track traffic conditions through sensors and cameras.</p>
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
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={SIGNAl3} alt="Validator" className="img-fluid" />
            </div>
          </div>
        
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">TC 50
                </h3>
                <p>
                The backbone of Intelligent Traffic Management Systems (ITMS), these controllers enable real-time monitoring, adaptive signal adjustments, and integration of data from multiple traffic inputs. They optimize traffic flow and reduce waiting times, offering a seamless commuting experience.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Continuously track traffic conditions through sensors and cameras.</p>
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
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={SIGNAl3} alt="Validator" className="img-fluid" />
            </div>
          </div>

        



        </Slider>
      </Container>
    </>
  );
};

export default Controller;
