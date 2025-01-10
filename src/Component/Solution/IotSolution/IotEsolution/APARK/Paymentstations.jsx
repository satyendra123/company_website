import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './IotEsolution.css';
import flap from './../../IOTSOLUTIONIMG/pmsimg/Untitled-2-Recovered 2.png';
import Turner from './../../IOTSOLUTIONIMG/pmsimg/Turner S200 1.png';
import Visitor from './../../IOTSOLUTIONIMG/pmsimg/Visitor Kiosk 1.png';
import Manned_visitor from './../../IOTSOLUTIONIMG/pmsimg/Manned Visitor Desk 1.png';
import identification from './../../IOTSOLUTIONIMG/identification.png';
import tariff from './../../IOTSOLUTIONIMG/pmsimg/tariff.png';
import software from './../../IOTSOLUTIONIMG/pmsimg/software 2 1.png';
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
                <h3 className="">Flaptile R 180</h3>
                <p>
                Flapp barrier with modern design with advance optical sensors makes it more suitable for smooth and secure access gate with standards and wider lane configuratuion allow access to ecery catagory of users </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    In-built Mi-fare access card.
                    </p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">
                    Smart controller with inbuilt memory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={flap} alt="Validator" className="img-fluid" style={{width:"50%"}} />
            </div>
          </div>
 {/* Slide 1.1 */}
 
          {/* Slide 2 (can be customized with different content) */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">TURNER S 100</h3>
                <p>
               Tripod turnstile with unique designe provide smooth and quick access its smart mechanism makes it more reliable and durable for every pedestrian accerss application.</p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src={identification} alt="Identification" className="img-fluid" />
                    </div>
                    <p className="ml-3"> In-built Mi-fare access card.</p>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="">
                      <img  src={tariff} alt="Tariff" className="img-fluid" />
                    </div>
                    <p className="ml-3">Smart controller with inbuilt memory.</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img style={{height:"240px"}} src={Turner} alt="Validator" className="img-fluid" />
            </div>
          </div>

          

        </Slider>
      </Container>
    </>
  );
};

export default Sensors;
