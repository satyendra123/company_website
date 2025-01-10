import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PmsEsolution.css';
import identification from './../../PMSSOLUTIONIMG/pmsimg/identification.png';
import tariff from './../../PMSSOLUTIONIMG/pmsimg/tariff.png';
import Software from './../../PMSSOLUTIONIMG/pmsimg/Uparksoftware.png';
import Software1 from './../../PMSSOLUTIONIMG/pmsimg/Server 2.png';

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
                <h3 className="">Centeral Management System</h3>
                <p>
                PARKSIM software is a comprehensive, scalable parking solution offering seamless integration, advanced monitoring, control, cash desk functions, and extensive reporting features.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  CMS manages parking devices with real-time monitoring, control, and upgrades.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  The server ensures secure, reliable parking software performance with admin center support.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Software1} alt="Validator" className="img-fluid" />
            </div>
          </div>



          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Software</h3>
                <p>
                ParkSure enhances parking convenience with a user-friendly interface, helping users locate available slots easily. Parking owners can monitor insights like vehicle count, occupied and vacant slots.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Deep insights help optimize parking space usage and boost revenue.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Personalized reports provide key metrics and valuable insights for car parks.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img src={Software} alt="Validator" className="img-fluid" />
            </div>
          </div>




        </Slider>
      </Container>
    </>
  );
};

export default Sensors;
