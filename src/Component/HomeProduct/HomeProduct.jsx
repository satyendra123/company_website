import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from "reactstrap";
import "./HomeProduct.css";
import boomgifs from "../../Container/images/boomgifs.gif";
import metrogif from "../../Container/images/metrogif.png";
// flip imajes for boom_barrier
import BoomBarrierImage1 from "./Homeproductimg/Boombarrier/boomBarrierImage1.png";
import BoomBarrierImage2 from "./Homeproductimg/Boombarrier/Hurricane.png";
import BoomBarrierImage3 from "./Homeproductimg/Boombarrier/Tornado.png";
import BoomBarrierImage4 from "./Homeproductimg/Boombarrier/Parki.png";
import Boombarrierfeatures from "../../Utils/Homepagesixcomponent/Boombarrierfeatures";
import Flappbarrierfeatures from "../../Utils/Homepagesixcomponent/Flappbarrierfeatures";
import Baggagescannerfeatures from "../../Utils/Homepagesixcomponent/Baggagescannerfeatures";
import Fullheightturnstilefeatures from "../../Utils/Homepagesixcomponent/Fullheightturnstilefeatures";
import Bollardfeatures from "../../Utils/Homepagesixcomponent/Bollardfeatures";
import Dfmdefeatrures from "../../Utils/Homepagesixcomponent/Dfmdefeatrures";
import HomeProductImg from "./Homeproductimg/homeProduct2.jpeg";
// import OurStory from "../OurStory/OurStory";
// import elipse from "../../Container/images/elipse.png";
const HomeProduct = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 5000); // Toggle every second

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const handleBoomBarrierCardClick = () => {
    navigate("/product/boombarrier"); // Navigate to the /boombarrier route
  };
  const handleFlapBarrierCardClick = () => {
    navigate("/product/flapbarrier"); // Navigate to the /boombarrier route
  };
  const handleDoorandshuttersCardClick = () => {
    navigate("product/shut-door-motor"); // Navigate to the /boombarrier route
  };
  const handleFullHighTurnstileCardClick = () => {
    navigate("/product/full-height-turnstile"); // Navigate to the /boombarrier route
  };
  const handleBaggageScannerCardClick = () => {
    navigate("/product/baggag-escanner"); // Navigate to the /boombarrier route
  };
  const handleBollardCardClick = () => {
    navigate("/product/bollard"); // Navigate to the /boombarrier route
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setFlipped4] = useState(false); // State to track flip status
  const [isFlipped5, setFlipped5] = useState(false); // State to track flip status
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Toggle the flip state
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const handleFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };
  // Toggle the flip state for the third card
  const handleFlip3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  const handleFlip4 = () => {
    setFlipped4(!isFlipped4); // Toggle the flip state
  };
  const handleFlip5 = () => {
    setFlipped5(!isFlipped5); // Toggle the flip state
  };

  // Array of images
  const images = [
    BoomBarrierImage1,
    BoomBarrierImage2,
    BoomBarrierImage3,
    BoomBarrierImage4,
  ];

  // Cycle through the images every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 1 second

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [images.length]);

  const toggleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className="home-product mt-5"
      style={{ maxWidth: "100%", marginBottom: "1rem" }}
    >
      {/* <div className="product-header mt-1">
        <div className="product-header-container">
          <img src={boomgifs} alt="" className="left-img" />
          <h3 style={{ marginTop: "10px" }} className="product-header-text">
            INNOVATIVE EMBEDDED PRODUCTS
          </h3>
          <img src={metrogif} alt="" className="right-img" />
        </div>
        <h3 className="product-subheader-text mt-3 mb-5">
          Discover peace of mind with our top-notch Security Products, tailored
          to protect your assets. Whether at home, the office, or in enterprise
          settings, our products guarantee reliability and performance.
        </h3>
      </div> */}

      <div>
        <Row className="justify-content-center">
          <Col
            style={{ height: "auto" }}
            // lg="3"
            xl="3"
            className="d-flex prod-type"
          >
            <Card className="flex-fill">
              <CardBody
                className="d-flex justify-content-center align-items-center text-center flex-column"
                style={{ height: "100%" }}
              >
                <img
                  src={HomeProductImg}
                  alt=""
                  style={{
                    maxWidth: "100%", // Ensure the image doesn't exceed the container's width
                    maxHeight: "100%", // Ensure the image doesn't exceed the container's height
                    objectFit: "contain", // Maintain the aspect ratio and fit the image within its container
                  }}
                />
                <CardText
                  className="home-product-left-section"
                  style={{ marginTop: "1rem", textAlign: "justify" }}
                >
                  At Houston Systems, trust is the foundation of everything we
                  do. With over 10 years of experience, we have built a
                  reputation for delivering high-quality security solutions that
                  you can rely on. We prioritize excellence at every step,
                  ensuring our solutions consistently exceed the highest
                  standards of safety and performance.
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col lg="9" xl="9" className="prod-main">
            <Row>
              <Col style={{ cursor: "pointer" }} lg="4" className="mb-2">
                <Boombarrierfeatures onClick={handleBoomBarrierCardClick} />
              </Col>
              <Col style={{ cursor: "pointer" }} lg="4" className="mb-2">
                <Flappbarrierfeatures onClick={handleFlapBarrierCardClick} />
              </Col>
              <Col style={{ cursor: "pointer" }} lg="4" className="mb-2">
                <Baggagescannerfeatures
                  onClick={handleBaggageScannerCardClick}
                />
              </Col>
            </Row>
            <div className="mb-4" /> {/* Gap after the first row */}
            <Row>
              <Col style={{ cursor: "pointer" }} lg="4" className="mb-2">
                <Bollardfeatures onClick={handleBollardCardClick} />
              </Col>
              <Col style={{ cursor: "pointer" }} lg="4" className="mb-2">
                <Dfmdefeatrures onClick={handleDoorandshuttersCardClick} />
              </Col>
              <Col style={{ cursor: "pointer" }} lg="4" className="mb-2">
                <Fullheightturnstilefeatures
                  onClick={handleFullHighTurnstileCardClick}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default HomeProduct;
