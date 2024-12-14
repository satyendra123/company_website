import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PgsEsolution.css';
import Wparkwgsensor from './../../PGSSOLUTIONIMG/Wparkwgsensor.png';
import Wparkwssensor from './../../PGSSOLUTIONIMG/Wparkwssensor.png';
import Wparkgroundindicator from './../../PGSSOLUTIONIMG/Wparkgroundindicator.png';
import Wparksssensor from './../../PGSSOLUTIONIMG/Wparksssensor.png';
import Wparkstackindicator from './../../PGSSOLUTIONIMG/Wparkstackindicator.png';

import Splitsensor from './../../PGSSOLUTIONIMG/Splitsensor.png';
import Slotsensor from './../../PGSSOLUTIONIMG/Slotsensor.png';
import identification from './../../PGSSOLUTIONIMG/identification.png';
import tariff from './../../PGSSOLUTIONIMG/tariff.png';

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
                <h3 className="ml-4">Wireless Ground Sensor</h3>
                <p>
                Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking spacae status
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Precisely detects vehicle presence and occupancy in parking spaces.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Provides instant status updates to parking  systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wparkwgsensor} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>

           {/* Slide 2 */}
           <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="ml-4">Wireless Surface Sensor</h3>
                <p>
                Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking spacae status
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Precisely detects vehicle presence and occupancy in parking spaces.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Provides instant status updates to parking  systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wparkwssensor} alt="Validator" className="img-fluid" />
            </div>
          </div>

                    {/* Slide 3 */}
                    <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="ml-4">Outdoor LED Indicator</h3>
                <p>
                Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking spacae status
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Precisely detects vehicle presence and occupancy in parking spaces.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Provides instant status updates to parking  systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wparkgroundindicator} alt="Validator" className="img-fluid" />
            </div>
          </div>

                    {/* Slide 4 */}
                    <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="ml-4">Wireless Stack Sensor</h3>
                <p>
                Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking spacae status
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Precisely detects vehicle presence and occupancy in parking spaces.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Provides instant status updates to parking  systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wparksssensor} alt="Validator" className="img-fluid" />
            </div>
          </div>

                    {/* Slide 5 */}
                    <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="ml-4">Stack Wireless LED Indicator</h3>
                <p>
                Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking spacae status
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Precisely detects vehicle presence and occupancy in parking spaces.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Provides instant status updates to parking  systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wparkstackindicator} alt="Validator" className="img-fluid" />
            </div>
          </div>

        </Slider>
      </Container>
    </>
  );
};

export default Sensors;
