import React, {useState, useEffect, useContext} from "react";
import Slider from "react-slick";
import Ultra from './SolutionProductImages/img/ultrasonic_sensor.png';
import Combi from './SolutionProductImages/img/combi_sensor.png';
import Ultra_ from './SolutionProductImages/img/ultrasonic sensor.png';
import basket from './SolutionProductImages/basket.png';
import exit from './SolutionProductImages/img/Exit Display 2.png';
import endoor_zone_display from './SolutionProductImages/img/Indoor Zone Display 3.png';
import Parki from './SolutionProductImages/img/Parki (Left Side Arm) 2.png';
import Display from './SolutionProductImages/img/Display1 1.png';
import ultra___ from './SolutionProductImages/img/ultra___.png';
import gantry from './SolutionProductImages/img/gantry 1.png';
import Layer from './SolutionProductImages/img/Layer 9.png';
import indoor from './SolutionProductImages/img/Indoor Zone Display 3.png';
import Findmycar from './SolutionProductImages/img/Find My Car Kiosk 2.png';
import ParkSure from './SolutionProductImages/img/ParkSure 5.png';
import greenandred from './SolutionProductImages/img/greenandred.png';

import loopdetector from './SolutionProductImages/img/LoopDetector.png';

import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SolutionProduct.css';

import { ProductContext } from '../../../../Context/PGSContext/ProContext';

const SolutionProduct = () => {
  const { selectedCategory } = useContext(ProductContext); // consume selectedCategory from context
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
      category: "U-Park",
      images: [
        { img: Ultra, description: "YSD-200 speed limit RGB matrix display shows the maximum allowed speed on a specific Parking area." },
        { img: Combi, description: "ED-500 RGB emergency exit matrix display with inbuilt alarm to guide users to evacuate from parking area in case of emergency" },
        { img: Ultra_, description: "EES-200 water proof RGB led floor strip helps users to follow emergency drive way in case of evacuation mode" },
        { img: exit, description: "Exit RGB matrix display guide users to exit from the specific area of parking with the help of arrow indicator" },
        { img: loopdetector, description: "LD-25 integrated with vehicle counting device at entry and exit provides vacancy status over entry display" },
        { img: Parki, description: "Parki automated boom barrier integrated with PGS system at specific location to manage traffic as per parking status" },
        { img: Display, description: "RGB matrix zone display guide users about parking status at tri-junction, bi-junction with the help of arrow indicators" },
        { img: ultra___, description: "FCS-60 Fire controller to integrate PGS system with fire alarm to evacuate users with the help of PGS system " },
        { img: gantry, description: "Wireless outdoor road side matrix parking display guide city travellers with the help of vacancy status in different parking area " },
      ],
    },
    {
      category: "V-Park",
      images: [
        { img: Ultra, description: "YSD-200 speed limit RGB matrix display shows the maximum allowed speed on a specific Parking area." },
        { img: Combi, description: "ED-500 RGB emergency exit matrix display with inbuilt alarm to guide users to evacuate from parking area in case of emergency" },
        { img: Ultra_, description: "EES-200 water proof RGB led floor strip helps users to follow emergency drive way in case of evacuation mode" },
        { img: exit, description: "Exit RGB matrix display guide users to exit from the specific area of parking with the help of arrow indicator" },
        { img: Parki, description: "Parki automated boom barrier integrated with PGS system at specific location to manage traffic as per parking status" },
        { img: Display, description: "RGB matrix zone display guide users about parking status at tri-junction, bi-junction with the help of arrow indicators" },
        { img: ultra___, description: "FCS-60 Fire controller to integrate PGS system with fire alarm to evacuate users with the help of PGS system " },
        { img: gantry, description: "Wireless outdoor road side matrix parking display guide city travellers with the help of vacancy status in different parking area " },
        { img: Findmycar, description: "Android touch screen car finding kiosk help parking users to find their car location with the help of putting car number" },
      ],
    },
    {
      category: "W-Park",
      images: [
        { img: Ultra, description: "YSD-200 speed limit RGB matrix display shows the maximum allowed speed on a specific Parking area." },
        { img: endoor_zone_display, description: "An emergency exit display guides people to the nearest safe exit with clear, illuminated signage." },
        { img: Parki, description: "Parki automated boom barrier integrated with PGS system at specific location to manage traffic as per parking status" },
        { img: Display, description: "RGB matrix zone display guide users about parking status at tri-junction, bi-junction with the help of arrow indicators" },
        { img: gantry, description: "Wireless outdoor road side matrix parking display guide city travellers with the help of vacancy status in different parking area " },
        { img: indoor, description: "outdoor parking vacancy status matrix display guide users by providing parking status in the form of vacancy, occupancy and full " },
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