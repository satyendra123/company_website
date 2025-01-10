import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PgsEsolution.css';
import Vparksoftware from './../../PGSSOLUTIONIMG/Vparksoftware.png';
import identification from './../../PGSSOLUTIONIMG/identification.png';
import tariff from './../../PGSSOLUTIONIMG/tariff.png';

const SoftwarePackages = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobileScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <Container className="container">
      <Slider {...sliderSettings}>
        {/* Slide 1 */}
        <div className="d-flex">
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}>
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
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-center align-items-center`}>
            <img src={Vparksoftware} alt="Validator" className="img-fluid" style={{ width: '50%' }} />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="d-flex">
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex align-items-center`}>
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
          <div className={`col-12 ${!isMobileScreen ? 'col-md-6' : ''} d-flex justify-content-center align-items-center`}>
            <img src={Vparksoftware} alt="Validator" className="img-fluid" style={{ width: '50%' }} />
          </div>
        </div>

      </Slider>
    </Container>
  );
};

export default SoftwarePackages;
