import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PmsEsolution.css';
import Dispenser from './../../PMSSOLUTIONIMG/pmsimg/Dispenser 1.png';
import Tornado from './../../PMSSOLUTIONIMG/pmsimg/Tornado 8 (1).png';
import Validator_ from './../../PMSSOLUTIONIMG/pmsimg/Validator 2.png';
import zonedisplay from './../../PMSSOLUTIONIMG/pmsimg/Mannual Pay Station 6.png';
import identification from './../../PMSSOLUTIONIMG/pmsimg/identification.png';
import tariff from './../../PMSSOLUTIONIMG/pmsimg/tariff.png';
import Server  from './../../PMSSOLUTIONIMG/pmsimg/Server 2.png';
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
                <h3 className="">Ticket Dispensor</h3>
                <p>
                Upgrade to our advanced Entry & Exit Terminal for seamless access control and enhanced security. Our state-of-the-art system efficiently verifies tickets, ensuring authorized entry.                 </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Precisely detects vehicle presence and occupancy in parking spaces.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Provides instant status updates to parking  systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Dispenser} alt="Validator" className="img-fluid" style={{width:"50%"}} />
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Ticket Validator</h3>
                <p>
                The exit module provides a fast and easy exit control of a parking facility, which process a range of ticket types including encoded magnetic stripe tickets/Barcode Tickets and contactless smart cards.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  User-friendly display guarantees easy use and prevents operating errors
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Seamlessly integrate RFID, LPR System, Driver Image 
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Validator_} alt="Validator" className="img-fluid" />
            </div>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Sensors;
