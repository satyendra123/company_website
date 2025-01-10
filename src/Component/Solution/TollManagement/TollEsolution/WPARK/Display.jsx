import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TollEsolution.css';
import Wparkzonedisplay from './../../TOLLSOLUTIONIMG/tollimg/Wparkzonedisplay.png';
import Wparkfloordisplay from './../../TOLLSOLUTIONIMG/tollimg/Wparkfloordisplay.png';
import Wparkmaindisplay from './../../TOLLSOLUTIONIMG/tollimg/Wparkmaindisplay.png';

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
          {/* Slide 1 */}
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="ml-4">Zone Display</h3>
                <p>
                The LED display in Parking Guidance System System shows real-time parking space availability, helping users to find open spots quickly. 
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Works seamlessly with parking sensors and controllers
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Displays instant updates based on sensor data
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wparkzonedisplay} alt="Validator" className="img-fluid" style={{width:"50%"}}/>
            </div>
          </div>

           {/* Slide 2 */}
           <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="ml-4">Area Display</h3>
                <p>
                The LED display in Parking Guidance System System shows real-time parking space availability, helping users to find open spots quickly. 
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Works seamlessly with parking sensors and controllers
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Displays instant updates based on sensor data
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wparkfloordisplay} alt="Validator" className="img-fluid" />
            </div>
          </div>

                    {/* Slide 3 */}
                    <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="ml-4">main Display</h3>
                <p>
                The LED display in Parking Guidance System System shows real-time parking space availability, helping users to find open spots quickly. 
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Works seamlessly with parking sensors and controllers
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="image-circle">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                  Displays instant updates based on sensor data
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={Wparkmaindisplay} alt="Validator" className="img-fluid" />
            </div>
          </div>

        </Slider>
      </Container>
    </>
  );
};

export default Display;
