import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TollEsolution.css';
import Combisensor from './../../TOLLSOLUTIONIMG/tollimg/Combisensor.png';
import Splitsensor from './../../TOLLSOLUTIONIMG/tollimg/Splitsensor.png';
import Slotsensor from './../../TOLLSOLUTIONIMG/tollimg/Slotsensor.png';
import identification from './../../TOLLSOLUTIONIMG/tollimg/identification.png';
import tariff from './../../TOLLSOLUTIONIMG/tollimg/tariff.png';

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
                <h3 className="">Combi Sensors</h3>
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
              <img src={Combisensor} alt="Validator" className="img-fluid" style={{width:"50%"}} />
            </div>
          </div>

          {/* Slide 2 (can be customized with different content) */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Split Sensor</h3>
                <p>
                Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking spacae status
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">Precisely detects vehicle presence and occupancy in parking spaces.</p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">Provides instant status updates to parking  systems.</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Splitsensor} alt="Validator" className="img-fluid" />
            </div>
          </div>

           {/* Slide 3 (can be customized with different content) */}
           <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Slot Indicator</h3>
                <p>
                Ultrasonic sensor, mounted above each parking space, integrates with the indicator light to provide real-time parking spacae status
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">Precisely detects vehicle presence and occupancy in parking spaces.</p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="image-circle">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">Provides instant status updates to parking  systems.</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Slotsensor} alt="Validator" className="img-fluid" />
            </div>
          </div>

        </Slider>
      </Container>
    </>
  );
};

export default Sensors;
