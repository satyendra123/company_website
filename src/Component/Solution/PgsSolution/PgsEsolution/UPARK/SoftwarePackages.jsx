import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PgsEsolution.css';
import Software from './../../PGSSOLUTIONIMG/Uparksoftware.png';
import identification from './../../PGSSOLUTIONIMG/identification.png';
import tariff from './../../PGSSOLUTIONIMG/tariff.png';

const SoftwarePackages = () => {
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
                <h3 className="ml-4">Software</h3>
                <p>
                ParkSure enhances parking convenience with a user-friendly interface, helping users locate available slots easily. Parking owners can monitor insights like vehicle count, occupied and vacant slots.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Deep insights help optimize parking space usage and boost revenue.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Personalized reports provide key metrics and valuable insights for car parks.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Software} alt="Validator" className="img-fluid" />
            </div>
          </div>

          {/* Slide 2 (can be customized with different content) */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="ml-4">Software</h3>
                <p>
                ParkSure enhances parking convenience with a user-friendly interface, helping users locate available slots easily. Parking owners can monitor insights like vehicle count, occupied and vacant slots.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">Deep insights help optimize parking space usage and boost revenue.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Personalized reports provide key metrics and valuable insights for car parks.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Software} alt="Validator" className="img-fluid" />
            </div>
          </div>

        </Slider>
      </Container>
    </>
  );
};

export default SoftwarePackages;
