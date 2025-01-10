import React, {useState, useEffect, useContext} from "react";
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
import Loopdetector from './SolutionProductImages/productssliderimajes/LoopDetector.png';
import Accesscardreader from './SolutionProductImages/productssliderimajes/Accesscardreader.jpg';
import LEDIndicator from './SolutionProductImages/productssliderimajes/LEDIndicator.png';
import Layer from './SolutionProductImages/productssliderimajes/slider10.png';
import indoor from './SolutionProductImages/productssliderimajes/slider11.png';
import Findmycar from './SolutionProductImages/productssliderimajes/ANPR1 3.png';

import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SolutionProduct.css';

import { ProductContext } from '../../../../Context/PMSContext/ProContext';
const SolutionProduct = () => {

    const { selectedCategory } = useContext(ProductContext);

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

  const Products = [
    {
      category: "A-Park",
      images: [
        { img: Ultra, description: "LIPC vehicle license plate image verification camera enhance security at entry and exit of parking area." },
        { img: Combi, description: "PM 60 Parking display provides real time status (Free, Full, Vacancy count) in integration with Parking system" },
        { img: exit, description: "PS 20 Android handeld machine in integration with barrier and CMS provide economical parking architecture" },
        { img: endoor_zone_display, description: "TL90 traffic signal light in integration with parking system Indicate access status to the parking users at entry and exit lane" },
        { img: Parki, description: "HF20 UHF Reader integrated with parking system provides touchless access to the seasional parkers" },
        { img: Loopdetector, description: "LD 25 Dual channel integrated sensor activates entry and exit system with presence, transit and safety mode" },
        
      ],
    },
    {
      category: "F-Park",
      images: [

        { img: Combi, description: "PM-60 Parking display provides real time status (Free, Full, Vacancy count) in integration with Parking system" },
        { img: exit, description: "PS-20 Android handeld machine in integration with barrier and CMS provide economical parking architecture" },
        { img: Loopdetector, description: "LD-25 Dual channel integrated sensor activates entry and exit system with presence, transit and safety mode" },
        { img: Ultra, description: "LPR EE2010M vehicle license plate recognition camera enhance security and management within the  parking area." },
        { img: LEDIndicator, description: "OL-20 outdoor slot Red/Green indicator integrated with flap lock guide users for vacant slots" },
      ],
    },
    {
      category: "M-Park",
      images: [
        { img: Combi, description: "PM-60 Parking display provides real time status (Free, Full, Vacancy count) in integration with Parking system" },
        { img: exit, description: "PS-20 Android handeld machine in integration with barrier and CMS provide economical parking architecture" },
        { img: endoor_zone_display, description: "TL-90 traffic signal light in integration with parking system Indicate access status to the parking users at entry and exit lane" },
        { img: Loopdetector, description: "LD-25 Dual channel integrated sensor activates entry and exit system with presence, transit and safety mode" },
        { img: Display, description: "TS-50 acces terminal with inbuilt QR scanner and smart camera provide access to the online registered parking users" },
        { img: ultra___, description: "An emergency exit display guides people to the nearest safe exit with clear, illuminated signage." },
        { img: Accesscardreader, description: "AR-15 parking access reader provide access to the seasonal users based on subscription and prepaid parking model " },
      ],
    },
  ];


  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = Products.find(
      (product) => product.category === selectedCategory
    );
    setCurrentProducts(filteredProducts ? filteredProducts.images : []);
  }, [selectedCategory]);

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
        {currentProducts.map((product, index) => (
          <div
            key={index}
            className="product-card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "300px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              margin: "10px",
            }}
          >
            <div className="d-flex justify-content-center">
              <img
                src={product.img}
                alt="Product"
                className="img-fluid"
                style={{ height: "200px", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                minHeight: "60px",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              <p>{product.description}</p>
            </div>
            <div
              className="d-flex gap-5 align-items-center"
              style={{ marginTop: "10px" }}
            >
              <div>
                <img src={basket} alt="Basket" />
              </div>
              <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    style={{ color: "#FFD700", fontSize: "24px" }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SolutionProduct;