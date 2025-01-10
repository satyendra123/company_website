import React from "react";
import Slider from "react-slick";
import Ultra from './SolutionProductImages/Quewslidingimajes/slider1.png';
import Combi from './SolutionProductImages/Quewslidingimajes/slider2.png';
import Ultra_ from './SolutionProductImages/Quewslidingimajes/slider3.png';
import basket from './SolutionProductImages/basket.png';
import exit from './SolutionProductImages/Quewslidingimajes/slider4.png';
import endoor_zone_display from './SolutionProductImages/Quewslidingimajes/slider5.png';

// import exit1 from './SolutionProductImages/Quewslidingimajes/slider10.png';
// import Layer from './SolutionProductImages/Quewslidingimajes/slider11.png';
// import indoor from './SolutionProductImages/Quewslidingimajes/slider12.png';
// import Findmycar from './SolutionProductImages/Quewslidingimajes/slider13.png';
// import ParkSure from './SolutionProductImages/Quewslidingimajes/slider14.png';
// import greenandred from './SolutionProductImages/Quewslidingimajes/slider15.png';
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
    <p>HH 50 android device designed to process token for visitors in queue integration with SmartQ software. </p>
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
    <p>CD 10 three digit counter display guide visitors in queue by showing current token under process.</p>
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
    <p>WTD 20 smart device asigned against each token in waitng queue indicate visitor by alarm or vibration about his turn.</p>
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
    <p>KEY 25 toke display integrated device designed to change token number on display for the visitors in queue.</p>
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
    <p>A solar kit is a set of equipment designed to harness solar energy for power generation.</p>
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
