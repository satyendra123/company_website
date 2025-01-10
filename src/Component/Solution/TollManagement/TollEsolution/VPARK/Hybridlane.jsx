import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TollEsolution.css';
import LONGreader from './../../TOLLSOLUTIONIMG/tollimg/LONG RANGE RFID READER 10.png';
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
                <h3 className="">TORNADO</h3>
                <p>
                Unique designe with intelligent drive mechanism makes it more reliable.Quick opening speed with swing away kit integrated boom arm makes it suitable for any toll operation.
               
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Innovative motor technology with the best possible energy efficiency..</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Compact control unit with versatile configuration options.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Tornado} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>
{/* Slide 3 (can be customized with different content) */}
                   <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">UFD 50</h3>
                <p>
                User Fare Display shows real-time toll charges and payment status with high visibility and multilingual support for seamless toll transactions.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Bright, clear LED screens for easy readability in all lighting conditions.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Durable displays designed to function in extreme weather conditions..</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img style={{height:"270px"}}  src={UFD} alt="Validator" className="img-fluid" />
            </div>
          </div>


          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Manned Ticketing System</h3>
                <p>
                A Manned Payment System involves a human operator managing transactions, ensuring a personalized customer experience, assisting with payment processing.             </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Processing tickets and cards with magnetic strips or barcodes
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Optimized for flexible and convenient revenue collection
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Mannualpay} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Display;
