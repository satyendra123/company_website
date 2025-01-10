import React from "react";
import Slider from "react-slick";
import Ultra from './SolutionProductImages/iotsliderimajes/slider1.png';
import Combi from './SolutionProductImages/iotsliderimajes/slider2.png';
import Ultra_ from './SolutionProductImages/iotsliderimajes/slider3.png';
import basket from './SolutionProductImages/basket.png';
import exit from './SolutionProductImages/iotsliderimajes/slider4.png';
import endoor_zone_display from './SolutionProductImages/iotsliderimajes/slider6.png';
import Parki from './SolutionProductImages/iotsliderimajes/slider7.png';
import Display from './SolutionProductImages/iotsliderimajes/slider5.png';
// import ultra___ from './SolutionProductImages/iotsliderimajes/slider6.png';
// import gantry from './SolutionProductImages/iotsliderimajes/slider7.png';

import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SolutionProduct.css';

const SolutionProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-container-wrapper">
      <h3  className="text-center m-5"    style={{
        fontSize: "26px",
        fontWeight: "bold",
        background: "linear-gradient(to right, #09365C, #1372C2)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>Product</h3>
      <Slider {...settings}>

        <div className="product-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '10px' }}>
          <div className="d-flex justify-content-center">
            <img src={Ultra} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
          </div>
          <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
            <p>S20 Android touch screen ticket scanning machine with inbuilt camera provide security and quick access through gates</p>
          </div>
          <div className="d-flex gap-5 align-items-center" style={{ marginTop: '10px' }}>
            <div>
              <img src={basket} alt="" />
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: "center" }}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: '#FFD700', fontSize: '24px' }} />
              ))}
            </div>
          </div>
        </div>

        <div className="product-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '10px' }}>
          <div className="d-flex justify-content-center">
            <img src={Combi} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
          </div>
          <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
            <p>An emergency exit designed with extra passage width for trolly,wheel chair, luggage to access through the gate</p>
          </div>
          <div className="d-flex gap-5 align-items-center" style={{ marginTop: '10px' }}>
            <div>
              <img src={basket} alt="" />
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: "center" }}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: '#FFD700', fontSize: '24px' }} />
              ))}
            </div>
          </div>
        </div>

        <div className="product-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '10px' }}>
          <div className="d-flex justify-content-center">
            <img src={Ultra_} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
          </div>
          <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
            <p>Access cards with proximity and mifare technology provides secure and quick access through pedestrian gates.</p>
          </div>
          <div className="d-flex gap-5 align-items-center" style={{ marginTop: '10px' }}>
            <div>
              <img src={basket} alt="" />
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: "center" }}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: '#FFD700', fontSize: '24px' }} />
              ))}
            </div>
          </div>
        </div>

        <div className="product-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '10px' }}>
          <div className="d-flex justify-content-center">
            <img src={exit} alt="" className="img-fluid" style={{ objectFit: "contain" }} />
          </div>
          <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
            <p>Access gates integrated T20 Ticket acceptor module for quick scanning of barcode/QR Code tickets and access cards</p>
          </div>
          <div className="d-flex gap-5 align-items-center" style={{ marginTop: '10px' }}>
            <div>
              <img src={basket} alt="" />
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: "center" }}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: '#FFD700', fontSize: '24px' }} />
              ))}
            </div>
          </div>
        </div>

        

      

        <div className="product-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '10px' }}>
          <div className="d-flex justify-content-center">
            <img src={Display} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
          </div>
          <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
            <p>Full-height turnstiles robust structure provide smooth access offer superior security, perfect for restricted areas.</p>
          </div>
          <div className="d-flex gap-5 align-items-center" style={{ marginTop: '10px' }}>
            <div>
              <img src={basket} alt="" />
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: "center" }}>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: '#FFD700', fontSize: '24px' }} />
              ))}
            </div>
          </div>
        </div>

        
      
     

      </Slider>
    </div>
  );
};

export default SolutionProduct;
