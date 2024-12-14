import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PmsEsolution.css';
import Validator from '../PMSSOLUTIONIMG/Validator.png';
import barrier from '../PMSSOLUTIONIMG/barrier.png';
import Paystation from '../PMSSOLUTIONIMG/Paystation.png';
import identification from '../PMSSOLUTIONIMG/identification.png';
import tariff from '../PMSSOLUTIONIMG/tariff.png';

const AccessController = () => {
  const sliderSettings = {
    dots: true,
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
                <h1 className="ml-4">Entry Terminals</h1>
                <p>
                The Park-inn series are multi-functional fully integrated ticketing systems provides a fast and easy entrance control of a parking facility, provides great convenience and accuracy for clients accessing parking systems.
                </p>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  With precise tariff calculations and transparent pricing, confidence is guaranteed. 
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Seamlessly integrate RFID, LPR System, Driver Image 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Validator} alt="Validator" className="img-fluid" />
            </div>
          </div>

          {/* Slide 2 (can be customized with different content) */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h1 className="ml-4">Exit Terminals</h1>
                <p>
                The exit module provides a fast and easy exit control of a parking facility, which process a range of ticket types including encoded magnetic stripe tickets/Barcode Tickets and contactless smart cards.
                </p>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">User-friendly display guarantees easy use and prevents operating errors</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Seamlessly integrate RFID, LPR System, Driver Image </p>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Paystation} alt="Validator" className="img-fluid" />
            </div>
          </div>

        </Slider>
      </Container>
    </>
  );
};

export default AccessController;
