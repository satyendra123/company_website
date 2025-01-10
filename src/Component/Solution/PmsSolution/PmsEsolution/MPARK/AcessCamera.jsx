import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PmsEsolution.css';
import ANPR1 from './../../PMSSOLUTIONIMG/pmsimg/ANPR1 4.png';
import Autopay from './../../PMSSOLUTIONIMG/pmsimg/Auto pay station2 2.png';
import Autopay1 from './../../PMSSOLUTIONIMG/pmsimg/Paystation.png';
import apspeonfoot from './../../PMSSOLUTIONIMG/pmsimg/apspeonfoot.jpg';

// import Splitsensor from './../../PMSSOLUTIONIMG/pmsimg/Splitsensor.png';
// import Slotsensor from './../../PGSSOLUTIONIMG/Slotsensor.png';
import identification from './../../PMSSOLUTIONIMG/pmsimg/identification.png';
import tariff from './../../PMSSOLUTIONIMG/pmsimg/tariff.png';
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
          {/* Slide 1 */}
         

           {/* Slide 2 */}
           <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Cashless Payment Station</h3>
                <p>
                The Auto Pay Station ensures quick, easy transactions, supports multiple payment methods, and maximizes revenue collection with flexibility and convenience.</p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Processing tickets and cards with magnetic strips or barcodes</p> 
                                     </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Optimized for flexible and convenient revenue collection</p>                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img style={{height:"260px"}} src={Autopay} alt="Validator" className="img-fluid" />
            </div>
          </div>
        {/* slide 2 */}
        <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Manned Payment Station</h3>
                <p>
                A Manned Payment System involves a human operator managing transactions, ensuring a personalized customer experience, assisting with payment processing.</p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Processing tickets and cards with magnetic strips or barcodes </p> 
                                     </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Optimized for flexible and convenient revenue collection</p>                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Autopay1} alt="Validator" className="img-fluid" />
            </div>
          </div>
        

        </Slider>
      </Container>
    </>
  );
};

export default Controller;
