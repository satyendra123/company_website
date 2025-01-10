import React from "react";
import Slider from "react-slick";
import Ultra from './SolutionProductImages/productssliderimajes/slider1.png';
import Combi from './SolutionProductImages/productssliderimajes/slider2.png';
import Ultra_ from './SolutionProductImages/productssliderimajes/slider3.png';
import basket from './SolutionProductImages/basket.png';
import exit from './SolutionProductImages/productssliderimajes/slider4.png';
import endoor_zone_display from './SolutionProductImages/productssliderimajes/slider5.png';
import Parki from './SolutionProductImages/productssliderimajes/slider6.png';
import Display from './SolutionProductImages/productssliderimajes/slider7.png';
import ultra___ from './SolutionProductImages/productssliderimajes/slider8.png';
import gantry from './SolutionProductImages/productssliderimajes/slider9.png';
// import exit1 from './SolutionProductImages/productssliderimajes/slider10.png';
// import Layer from './SolutionProductImages/productssliderimajes/slider11.png';
// import indoor from './SolutionProductImages/productssliderimajes/slider12.png';
// import Findmycar from './SolutionProductImages/productssliderimajes/slider13.png';
// import ParkSure from './SolutionProductImages/productssliderimajes/slider14.png';
// import greenandred from './SolutionProductImages/productssliderimajes/slider15.png';
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SolutionProduct.css';
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

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
    <p>Auditory signal device emits sounds to convey traffic alerts to the blind or normal pedetrians to ensure their safety.</p>
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
    <p>Pedestrian counter show stopping and moving time for pedestrian to ensure their safety while crossing road.</p>
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
    <p>Electromagnetic induction sensor at traffic signal helps  for better management and contoll in low traffic zone.  </p>
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
    <img src={exit} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p> Traffic counter  at the traffic signal guide the motorist about their waiting and moving time for smooth funtioning of traffic signal.</p>
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
    <img src={endoor_zone_display} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p>Solar kit intigrated traffic signal ensure low power consumption and provide power independent arcitecture.</p>
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
    <img src={Parki} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p>Camera intigrated adaptive traffic signal system with AI vision technology ensure auto funtioning with advance features.</p>
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
    <p>A manual override controll mechanism at traffic signal helps traffic police to take over contoll manualy during odd hours.</p>
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
