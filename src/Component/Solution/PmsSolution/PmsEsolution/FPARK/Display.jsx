import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PmsEsolution.css';
import Wparkwgsensor from './../../PMSSOLUTIONIMG/pmsimg/Flap Lock 1.png';
import Wparkwssensor from './../../PMSSOLUTIONIMG/pmsimg/Parking Meter2 1.png';
import Wparkgroundindicator from './../../PMSSOLUTIONIMG/pmsimg/Integration Controller1 1.png';
import Wparksssensor from './../../PMSSOLUTIONIMG/pmsimg/Vparksoftware.png';
import Wparkstackindicator from './../../PMSSOLUTIONIMG/pmsimg/Wparkstackindicator.png';

// import Splitsensor from './../../PMSSOLUTIONIMG/pmsimg/Splitsensor.png';
// import Slotsensor from './../../PGSSOLUTIONIMG/Slotsensor.png';
import identification from './../../PMSSOLUTIONIMG/pmsimg/identification.png';
import tariff from './../../PMSSOLUTIONIMG/pmsimg/tariff.png';
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
             {/* Slide 3 */}
             <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Parksim Controller</h3>
                <p>
                An Integration Controller connects devices and systems in parking management, enabling seamless automation and real-time data exchange.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Ensures device share real-time data with the central management system.                 </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Collects and consolidates data from various subsystems                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Wparkgroundindicator} alt="Validator" className="img-fluid" />
            </div>
          </div>
          {/* Slide 1 */}

          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Parksim Controller</h3>
                <p>
                An Integration Controller connects devices and systems in parking management, enabling seamless automation and real-time data exchange.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Ensures device share real-time data with the central management system.                 </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Collects and consolidates data from various subsystems                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Wparkgroundindicator} alt="Validator" className="img-fluid" />
            </div>
          </div>
          {/* Slide 1 */}

          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Parksim Controller</h3>
                <p>
                An Integration Controller connects devices and systems in parking management, enabling seamless automation and real-time data exchange.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Ensures device share real-time data with the central management system.                 </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Collects and consolidates data from various subsystems                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Wparkgroundindicator} alt="Validator" className="img-fluid" />
            </div>
          </div>
          {/* Slide 1 */}

        </Slider>
      </Container>
    </>
  );
};

export default Display;
