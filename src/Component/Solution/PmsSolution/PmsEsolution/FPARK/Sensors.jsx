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
                <h3 className="">Flap Lock</h3>
                <p>
                Flap lock is a type of locking mechanism designed to allow users to access specific parking slot and provides a complete unmanned parking experience to the user.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Flap Lock integrated system plays an important role in traffic control and revenue generation.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    The system is designed with enhanced security features to ensure revenue security  
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Wparkwgsensor} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>

           {/* Slide 2 */}
        
           <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Flap Lock</h3>
                <p>
                Flap lock is a type of locking mechanism designed to allow users to access specific parking slot and provides a complete unmanned parking experience to the user.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Flap Lock integrated system plays an important role in traffic control and revenue generation.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    The system is designed with enhanced security features to ensure revenue security  
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Wparkwgsensor} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Flap Lock</h3>
                <p>
                Flap lock is a type of locking mechanism designed to allow users to access specific parking slot and provides a complete unmanned parking experience to the user.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Flap Lock integrated system plays an important role in traffic control and revenue generation.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    The system is designed with enhanced security features to ensure revenue security  
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Wparkwgsensor} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Sensors;
