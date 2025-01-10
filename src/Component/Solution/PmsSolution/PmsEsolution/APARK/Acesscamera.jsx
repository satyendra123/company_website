import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PmsEsolution.css';
import paystations from './../../PMSSOLUTIONIMG/pmsimg/Mannual Pay Station 6.png';
import paystations1 from './../../PMSSOLUTIONIMG/pmsimg/Auto pay station2 2.png';
import identification from './../../PMSSOLUTIONIMG/pmsimg/identification.png';
import tariff from './../../PMSSOLUTIONIMG/pmsimg/tariff.png';
import Wparkwssensor from './../../PMSSOLUTIONIMG/pmsimg/Auto.jpg';
import apspeonfoot from './../../PMSSOLUTIONIMG/pmsimg/apspeonfoot.jpg';

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
                <h3 className="">Autopay stations(PAY & FOOT)</h3>
                <p>
               Automatic pay stations offers integration machine with multifuntional option with proccessing tickets and access card, recharge and removal of card multiple payment options, bank note/coin despensor, intercom etc.feci makes it suitable for every parking operations.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Easy-to-use interfaces for quick input information and payments</p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    The system is designed with enhanced security features to ensure revenue security                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img style={{height:"290px"}} src={Wparkwssensor} alt="Validator" className="img-fluid" />
            </div>
          </div>




          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Cashless Payment Station</h3>
                <p>
                A Manned Payment System involves a human operator managing transactions, ensuring a personalized customer experience, assisting with payment processing.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Optimized for flexible and convenient revenue collection
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Displays instant updates based on sensor data
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={paystations} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>

          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Manned Payment Station</h3>
                <p>
                The Pay Station ensures quick, easy transactions, supports multiple payment methods, and maximizes revenue collection with flexibility and convenience. 
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Optimized for flexible and convenient revenue collection
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Displays instant updates based on sensor data
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={paystations1} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>


        </Slider>
      </Container>
    </>
  );
};

export default Sensors;
