import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TollEsolution.css';
import Validator from '../TOLLSOLUTIONIMG/Validator.png';
import barrier from '../TOLLSOLUTIONIMG/barrier.png';
import Paystation from '../TOLLSOLUTIONIMG/Paystation.png';
import identification from '../TOLLSOLUTIONIMG/identification.png';
import tariff from '../TOLLSOLUTIONIMG/tariff.png';

const AccessGates = () => {
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
                <h1 className="ml-4">Access Gate</h1>
                <p>
                  Upgrade to our advanced Entry & Exit Terminal for seamless access control and enhanced security. Our state-of-the-art system efficiently verifies tickets, ensuring authorized entry.
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
                <h1 className="ml-4">Access Gate</h1>
                <p>
                The Pay Station ensures quick, easy transactions, supports multiple payment methods, and maximizes revenue collection with flexibility and convenience.
                </p>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Processing tickets and cards with magnetic strips or barcodes</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Optimized for flexible and convenient revenue collection</p>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Paystation} alt="Validator" className="img-fluid" />
            </div>
          </div>

           {/* Slide 3 (can be customized with different content) */}
           <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h1 className="ml-4">Access Gates</h1>
                <p>
                Durable construction with secure locks ensures protection, while an energy-efficient barrier offers advanced features for demanding parking systems.
                </p>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Innovative motor technology with the best possible energy efficiency.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Compact control unit with versatile configuration options.</p>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={barrier} alt="Validator" className="img-fluid" />
            </div>
          </div>

   {/* Slide 4 (can be customized with different content) */}
   <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h1 className="ml-4">Access Gate</h1>
                <p>
                PARKSIM software is a comprehensive, scalable parking solution offering seamless integration, advanced monitoring, control, cash desk functions, and extensive reporting features.
                </p>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">CMS manages parking devices with real-time monitoring, control, and upgrades.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">The server ensures secure, reliable parking software performance with admin center support.</p>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Validator} alt="Validator" className="img-fluid" />
            </div>
          </div>

        </Slider>
      </Container>
    </>
  );
};

export default AccessGates;
