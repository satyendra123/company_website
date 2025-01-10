import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Masstrangist.css';
import Controllerimg from './../../MASSTRANSITSOLUTIONIMG/massimg/Fleet-Management-Software 1.png';
import Paystation from './../../MASSTRANSITSOLUTIONIMG/massimg/Server 2.png';
import Turner from './../../MASSTRANSITSOLUTIONIMG/massimg/Turner S200 1 (1).png';
import Premium  from './../../MASSTRANSITSOLUTIONIMG/massimg/Premium 2.png';

// import barrier from './../../PGSSOLUTIONIMG/barrier.png';
import identification from './../../MASSTRANSITSOLUTIONIMG/massimg/identification.png';
import tariff from './../../MASSTRANSITSOLUTIONIMG/massimg/tariff.png';

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
        <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Server
                </h3>
                <p>
                  Pay & Access server provide high quality plateform with that technology 
                  and redandent capabilities system plateform extensive administrative and 
                  reporting function designed to handle large tranjaction operation. 
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Performed shedule task like clean DB,backup DB shedule transfer etc.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Perform admin controll functions with third party database integration.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img style={{height:"280px"}} src={Paystation} alt="Validator" className="img-fluid" />
            </div>
          </div>
          {/* Slide 1 */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Central Management System</h3>
                <p>
                 Central Management System (CMS)  refers to an integrated solution that centralizes the control,
                monitoring, and administration of payment and access-related functionalities.
                {/* Designed for fast, secure, and efficient access control, 
                equipped with advanced sensors and ticket validation technology (smart cards, QR codes, or NFC),
                 our flap barriers integrate seamlessly with modern fare collection systems.
                  Their sleek design and advanced technology make them the perfect solution for
                   high-traffic environments such as:Metro and Train Stations Bus terminals */}
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  CMS manages devices with real-time monitoring, control, and upgrades..
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Enhanced security through monitoring and incident management.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img style={{height:"280px"}} src={Controllerimg} alt="Validator" className="img-fluid" />
            </div>
          </div>

             {/* slider 3 */}
{/* slider 4 */}
        </Slider>
      </Container>
    </>
  );
};

export default Controller;
