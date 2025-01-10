import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TollEsolution.css';
import LONGreader from './../../TOLLSOLUTIONIMG/tollimg/LONG RANGE RFID READER 10.png';

import Handheld from './../../TOLLSOLUTIONIMG/tollimg/Hand Held RFID 1.png';
import Tornado from './../../TOLLSOLUTIONIMG/tollimg/Tornado 9.png';
import UFD from './../../TOLLSOLUTIONIMG/tollimg/Untitled-3 2.png';
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
                <h3 className="">HANDS FREE 50</h3>
                <p>
                UHF fastag reader reader allow quick and hassle free access through the toll gate with seamless identification of authorized users and reduce bottleneck. 
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                 TCPIP communication provide quick verification from database.
                  </p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">
                 Configurable reading range with detection area.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src={LONGreader} alt="Validator" className="img-fluid" style={{height:"200px"}}/>
            </div>
          </div>
     

          {/* Slide 1 */}
        
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
          {/* Slide 2 (can be customized with different content) */}
         
{/* Slide 3 (can be customized with different content) */}
                   <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className=""> UFD 200</h3>
                <p>
                RGB matrix userfare display guide travlers about their fastag status with vehicle catagory by getting it verification from cental database in case of cash payment it help user by showing toll fare to be paid.

                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">TCPIP communication provide quick verification from database.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">It can offer Integrated traffic signal indication.</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img  style={{height:"270px"}} src={UFD} alt="Validator" className="img-fluid" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-6 d-flex align-items-center">
              <div>
                <h3 className="">Hand Held RFID</h3>
                <p>
                User Fare Display shows real-time toll charges and payment status with high visibility and multilingual support for seamless toll transactions.
                </p>
                <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={identification} alt="Identification" className="img-fluid" />
                  </div>
                  <p className="ml-3">In-built Mi-fare access card.</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={tariff} alt="Tariff" className="img-fluid" />
                  </div>
                  <p className="ml-3">Smart controller with inbuilt memory..</p>
                </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img  style={{height:"270px"}} src={Handheld} alt="Validator" className="img-fluid" />
            </div>
          </div>
          
        </Slider>
      </Container>
    </>
  );
};

export default Display;
