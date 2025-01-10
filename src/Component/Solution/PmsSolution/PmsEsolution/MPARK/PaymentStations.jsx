import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PmsEsolution.css';
import ANPR1 from './../../PMSSOLUTIONIMG/pmsimg/ANPR1 4.png';
import Wparkwssensor from './../../PMSSOLUTIONIMG/pmsimg/LONG RANGE RFID READER 3.png';

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
                <h3 className=""> Hand's free UHF Reader</h3>
                <p>
                RFID reader offers seamless verification, enhancing convenience for authorized users and reducing bottlenecks in the entry process.                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Speeds up transactions in parking systems or access control </p>                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Easily expandable to handle large volumes of vehicles.</p>                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wparkwssensor} alt="Validator" className="img-fluid" />
            </div>
          </div>
        {/* slide 2 */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">ANPR Camera</h3>
                <p>
                ANPR uses number plate recognition for fast vehicle identification, streamlining access and enhancing security.                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Provides precise vehicle recognition even in various lighting conditions.                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Easily integrates with existing security or parking systems.                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={ANPR1} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>
                 
         

        </Slider>
      </Container>
    </>
  );
};

export default Controller;
