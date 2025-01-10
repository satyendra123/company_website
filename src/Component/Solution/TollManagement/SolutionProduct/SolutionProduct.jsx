import React from "react";
import Slider from "react-slick";
import Ultra from './SolutionProductImages/tollslidingimajes/slider1.png';
import Combi from './SolutionProductImages/tollslidingimajes/slider2.png';
import Ultra_ from './SolutionProductImages/tollslidingimajes/slider3.png';
import basket from './SolutionProductImages/basket.png';
import exit from './SolutionProductImages/tollslidingimajes/slider4.png';
import endoor_zone_display from './SolutionProductImages/tollslidingimajes/slider5.png';
import Parki from './SolutionProductImages/tollslidingimajes/slider6.png';
import Display from './SolutionProductImages/tollslidingimajes/slider7.png';
import ultra___ from './SolutionProductImages/tollslidingimajes/slider8.png';
import gantry from './SolutionProductImages/tollslidingimajes/slider9.png';
import exit1 from './SolutionProductImages/tollslidingimajes/slider10.png';
import untitled from './SolutionProductImages/tollslidingimajes/Untitled-3 2.png';
import Layer from './SolutionProductImages/tollslidingimajes/slider11.png';
import indoor from './SolutionProductImages/tollslidingimajes/slider12.png';
import Findmycar from './SolutionProductImages/tollslidingimajes/slider13.png';
import ParkSure from './SolutionProductImages/tollslidingimajes/slider14.png';
import greenandred from './SolutionProductImages/tollslidingimajes/slider15.png';
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
    <p>OHD 50 over head lane display with cross and arrow indicator in red/green color to guide user about lane status.</p>
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
    <p>SD 200 RGB matrix speed limit display indicate maximum permissible speed limit for travelers at highway.</p>
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
    <p>Automatic Number Plate Recognition camera with AI vision technology provide more accuracy at every lane.</p>
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
    <p>TL 200 traffic signal light in red/green color help users about their access status at every lane.</p>
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
    <p>IC 20 set of microform speaker ensure smooth communication between operator and user in case of help.</p>
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
    <p>LD 20 electromagnetic induction vehicle sensor in integration with barrier and Avcc provide vehicle count and safety.</p>
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
