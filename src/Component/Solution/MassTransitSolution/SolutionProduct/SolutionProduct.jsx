import React from "react";
import Slider from "react-slick";
import Ultra from './SolutionProductImages/Massslidingimajes/slider1.png';
import Combi from './SolutionProductImages/Massslidingimajes/slider2.png';
import Ultra_ from './SolutionProductImages/Massslidingimajes/slider3.png';
import basket from './SolutionProductImages/basket.png';
import exit from './SolutionProductImages/Massslidingimajes/slider4.png';
import endoor_zone_display from './SolutionProductImages/Massslidingimajes/slider5.png';
import Parki from './SolutionProductImages/Massslidingimajes/slider6.png';
import Display from './SolutionProductImages/Massslidingimajes/slider7.png';
import ultra___ from './SolutionProductImages/Massslidingimajes/slider8.png';
import gantry from './SolutionProductImages/Massslidingimajes/slider9.png';
import exit1 from './SolutionProductImages/Massslidingimajes/slider10.png';
import Layer from './SolutionProductImages/Massslidingimajes/slider11.png';
import indoor from './SolutionProductImages/Massslidingimajes/slider12.png';
import Findmycar from './SolutionProductImages/Massslidingimajes/slider13.png';
import ParkSure from './SolutionProductImages/Massslidingimajes/slider14.png';
import greenandred from './SolutionProductImages/Massslidingimajes/slider15.png';
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
    <img src={exit} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p>D 20 barcode scanner with intelligent graphical display reads and interpret barcode data to quickly retrieve information.</p>
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
    <p>TURNER B 150 with elegant design to perform quick and smooth operation in any high traffic application.</p>
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
    <img src={gantry} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p>SWINGTILE P 100 p-type access gate provide wider opening for wheel chairs,luggage carrying visitors.</p>
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
    <img src={exit1} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p> WB 200 series RFID wrist band specialy designed for amusment park,special events meusems conventions etc.</p>
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
    <img src={Layer} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p>HEP 50 series pass/wrist band printer capabel to print with unique designed as per event and customer requirment.</p>
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
    <img src={indoor} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p>AC 20 LF,HF,UHF and combi access cards comes with multiple formates and different memory functions.</p>
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
    <img src={Findmycar} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p>CW 20 portable USB access card writer can re-write and programme access cards like NFC EM ,Mi-fare etc.</p>
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
    <img src={ParkSure} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p> HCP Printer 20 series access card printer provide quick and smooth printing of access ID cards for staff and event managers.</p>
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
    <img src={greenandred} alt="" className="img-fluid" style={{ height: "200px", objectFit: "contain" }} />
  </div>
  <div style={{ minHeight: '60px', textAlign: 'center', marginTop: '10px' }}>
    <p>HM 50 portable POS terminal perform issuance of tickets, process payments, multiple reports, manage events Operations etc. </p>
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
