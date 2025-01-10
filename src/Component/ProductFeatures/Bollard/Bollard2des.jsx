import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import shield2 from "./BollardImg/Shield plus.png";
import Bollard_dimensions from "./BollardImg/bollarddimensions.png";
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import airports from "./BollardImg/airports.png";
import emphasis from "./BollardImg/emphasis.png";
import exibitions from "./BollardImg/exibitions.png";
import gov_buldings from "./BollardImg/gov_buldings.png";
import qr from "./BollardImg/qr.png";
import image1 from "./BollardImg/Midea/bollard1.png";
import image2 from "./BollardImg/Midea/bollard2.png";
import image3 from "./BollardImg/Midea/bollard3.png";
import image4 from "./BollardImg/Midea/bollard4.png";
import shieldantiterrordimension from "./BollardImg/Bollarddimension/shieldantiterrordimension.png"

import keyspecies from "./BollardImg/key_species/key_species_1.png";
import keyspecies2 from "./BollardImg/key_species/Keyspecies_2.png";
import keyspecies3 from "./BollardImg/key_species/keyspecies3.png";
import keyspecies4 from "./BollardImg/key_species/key_species_5.png";

const testimonials = [
  {
    name: "/image/Product_images/Accessories_img/Accessories 5.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 8.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 12.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 14.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 15.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 16.png",
  },
];
const mediaimg = [
  {
    img: image1,
  },
  {
    img: image2,
  },
  {
    img: image3,
  },
  {
    img: image4,
  },
];

const Bollard2des = () => {

  const [isMobile, setIsMobile] = useState(false);
          
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  useEffect(() => {
    handleSlideChange();
  }, []);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;
    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;
    const slidesPerView =
      swiper.params.slidesPerView > 1 ? swiper.params.slidesPerView : 1;

    slides.forEach((slide, index) => {
      slide.classList.remove("swiper-slide-right");
      if (index > activeIndex && index <= activeIndex + slidesPerView) {
        slide.classList.add("swiper-slide-right");
      }
    });
  };
  return (
    <div className="sdfsd">
      <div className="card2 ">
        <div className="card-body text-center">
          <div className="p-3">
            <h4 className="card-title mb-4 custom-left fw-semibold">Shield Plus</h4>
            <div className="row  mb-5">
            <div className="col-md-4 col-12 ">
                <p className="leftside_top_text">Lifting Time</p>
                <p className="leftside_second_text">7.5cm/Sec</p>
                <p className="leftside_top_text">Breaking Resistance</p>
                <p className="leftside_second_text">8,00,000J</p>
                <p className="leftside_top_text">Impact Resistance</p>
                <p className="leftside_second_text">60,000J</p>
              </div>
              <div className="col-md-4 col-12  custom-image">
                <img src={shield2} className="img-fluid" alt="VEGA" />
              </div>
              <div className="col-md-4 col-12 custom-right">
                <p className="rightside_top_text">Avg Life Cycle</p>
                <p className="rightside_second_text">20 million</p>
                <p className="rightside_top_text">Opening Speed</p>
                <p className="rightside_second_text"> 12 Meter/Min</p>
                <p className="rightside_top_text">Dimension</p>
                <p className="rightside_second_text">600 x 220 x 10</p>
              </div>
            </div>

{/*start specs */}
<div className="row align-items-center">
  {isMobile ? (
    // Mobile Layout
    <div className="row mb-3">
      <h3 className="text-center font-bold" style={{ fontWeight: 550 }}>KEY SPECS</h3>
      <div className="col-2">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "100%", height: "80px" }}
        >
          <div
            className="cardimg d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <img
              src={keyspecies}
              className="img-fluid"
              alt="Oil Icon"
              style={{ maxWidth: "40px", maxHeight: "40px" }}
            />
          </div>
        </div>
      </div>
      <div className="col-1"></div> {/* Gap */}
      <div className="col-2">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "100%", height: "80px" }}
        >
          <div
            className="cardimg d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <img
              src={keyspecies2}
              className="img-fluid"
              alt="Gate Icon"
              style={{ maxWidth: "40px", maxHeight: "40px" }}
            />
          </div>
        </div>
      </div>
      <div className="col-1"></div> {/* Gap */}
      <div className="col-2">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "100%", height: "80px" }}
        >
          <div
            className="cardimg d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <img
              src={keyspecies3}
              className="img-fluid"
              alt="Mechanism Icon"
              style={{ maxWidth: "40px", maxHeight: "40px" }}
            />
          </div>
        </div>
      </div>
      <div className="col-1"></div> {/* Gap */}
      <div className="col-2">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "100%", height: "80px" }}
        >
          <div
            className="cardimg d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <img
              src={keyspecies4}
              className="img-fluid"
              alt="Measurement Icon"
              style={{ maxWidth: "40px", maxHeight: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    // Desktop Layout
    <>
      <div className="col-2">
        <p className="key-specs-text">KEY SPECS.</p>
      </div>
      <div className="col-1">
        <div className="vertical-border"></div>
      </div>
      <div className="col">
        <div className="row justify-content-start g-3">
          <div className="col-auto cardkey" style={{ width: "100px", height: "80px", marginLeft: "20px" }}>
            <div className="cardimg d-flex justify-content-center align-items-center" style={{ height: "80%" }}>
              <img
                src={keyspecies}
                className="img-fluid"
                alt="Oil Icon"
                style={{ maxWidth: "60px", maxHeight: "60px" }}
              />
            </div>
          </div>
          <div className="col-auto cardkey" style={{ width: "100px", height: "80px", marginLeft: "20px" }}>
            <div className="cardimg d-flex justify-content-center align-items-center" style={{ height: "80%" }}>
              <img
                src={keyspecies2}
                className="img-fluid"
                alt="Gate Icon"
                style={{ maxWidth: "60px", maxHeight: "60px" }}
              />
            </div>
          </div>
          <div className="col-auto cardkey" style={{ width: "100px", height: "80px", marginLeft: "20px" }}>
            <div className="cardimg d-flex justify-content-center align-items-center" style={{ height: "80%" }}>
              <img
                src={keyspecies3}
                className="img-fluid"
                alt="Mechanism Icon"
                style={{ maxWidth: "60px", maxHeight: "60px" }}
              />
            </div>
          </div>
          <div className="col-auto cardkey" style={{ width: "100px", height: "80px", marginLeft: "20px" }}>
            <div className="cardimg d-flex justify-content-center align-items-center" style={{ height: "80%" }}>
              <img
                src={keyspecies4}
                className="img-fluid"
                alt="Measurement Icon"
                style={{ maxWidth: "60px", maxHeight: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )}
</div>
{/*end specs */}


{/* start application  */}

<div className="Application mb-4">
              <h4 className="card-title mb-4 fw-semibold">Application Area</h4>
              <div className="row ">
                <div className="col-md-6 col-12">
                  <div className="row residentimg justify-content-around">
                    <div className="col-auto cardApp">
                      <img
                        src={airports}
                        className="img-fluid"
                        alt="Oil Icon"
                      />
                    </div>
                    <div className="col-auto cardApp">
                      <img
                        src={emphasis}
                        className="img-fluid"
                        alt="Gate Icon"
                      />
                    </div>
                  </div>
                  <div className="row mt-3 residentimg justify-content-around">
                    <div className="col-auto cardApp">
                      <img
                        src={exibitions}
                        className="img-fluid"
                        alt="Oil Icon"
                      />
                    </div>
                    <div className="col-auto cardApp">
                      <img
                        src={gov_buldings}
                        className="img-fluid"
                        alt="Gate Icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 d-flex align-items-center">
                  <div className="row justify-content-around">
                    <p className="Appconte">
                    Bollards are ideal for securing pedestrian zones, regulating traffic flow, and safeguarding sensitive locations such as embassies, data centers, and government buildings from unauthorized vehicle intrusion.

                    </p>
                  </div>
                </div>
              </div>
  </div>
{/* end application  */}

<Container fluid className="py-4">
  {/* Title */}
  <Row className="justify-content-center">
    <Col xs={12} className="text-center mb-4">
      <h4 className="fw-semibold">Dimension and Layout</h4>
    </Col>
  </Row>

  {/* Main Content */}
  <Row className="align-items-center">
    {isMobile ? (
      <>
        {/* Image First */}
        <div className="text-center mb-3">
          <img
            src={shieldantiterrordimension}
            alt="Boom Barrier Diagram"
            className="img-fluid"
          />
        </div>
        {/* Text Content */}
        <div className="text-center">
          <div
            className="p-4 shadow-sm"
            style={{
              backgroundColor: "#f9f9f9",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            <p>
            Houston's bollards are designed for high-security and traffic management applications, tailored to site-specific factors like area layout, vehicle type, and traffic flow. With durable construction and precise operation, they provide reliable protection and seamless integration into diverse environments.
            </p>
          </div>
        </div>
      </>
    ) : (
      <>
        {/* Left Column (Text Content) */}
        <Col
          xs={12}
          md={6}
          className="text-center text-md-start mb-4 mb-md-0"
        >
          <div
            className="p-4 shadow-sm"
            style={{
              backgroundColor: "#f9f9f9",
              maxWidth: "300px",
            }}
          >
            <p>
            Houston's bollards are designed for high-security and traffic management applications, tailored to site-specific factors like area layout, vehicle type, and traffic flow. With durable construction and precise operation, they provide reliable protection and seamless integration into diverse environments.
            </p>
          </div>
        </Col>

        {/* Right Column (Image) */}
        <Col xs={12} md={6} className="text-center">
          <img
            src={shieldantiterrordimension}
            alt="Boom Barrier Diagram"
            className="img-fluid"
          />
        </Col>
      </>
    )}
  </Row>
</Container>

   {/* start Integration option */}
   <div className="Application">
              <h4 className="card-title mb-4 fw-semibold">Integration options</h4>
              <div className={`row ${isMobile ? "justify-content-center" : ""}`}>
                <div className="Integrationcardimg">
                  <img
                    src="/image/Product_images/Integrationoptions_img/bollard_integration.png"
                    className={`img-fluid main-image ${isMobile ? "mobile-image" : ""}`}
                    style={isMobile ? { width: "80%", margin: "0 auto" } : { width: "70%", marginLeft: "80px" }}
                    alt="Measurement Icon"
                  />
                </div>
              </div>
            </div>
{/* start Integration option */}
            {/* Accessories Section */}
            <div
              className="accessories-wrapper"
              style={{ textAlign: "center", padding: "20px" }}
            >
              <Swiper
                direction="horizontal"
                loop={true}
                autoHeight={false}
                centeredSlides={false}
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                  },
                  765: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                  },
                  430: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: ".accessories-swiper-button-next",
                  prevEl: ".accessories-swiper-button-prev",
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="accessories-card-custom">
                      <div className="accessories-container-custom">
                        <img
                          className="accessories-logo"
                          src={testimonial.name}
                          alt="Testimonial Logo"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-button-next accessories-swiper-button-next"></div>
                <div className="swiper-button-prev accessories-swiper-button-prev"></div>
              </Swiper>

              <div className="accessories-component-wrapper"></div>
            </div>
            {/* Solar-powered Boom Barrier Section */}
            <div className="row  mb-4 mr-0">
              <div className="col-12 col-md-4 pl-3 mt- pr-0 d-flex flex-column">
                {/* <div className="cardtexticon">
                  <img
                    className="cardtexticonimg"
                    src="/image/Product_images/Group 1000002006.png"
                    alt="icon 3"
                  />
                </div> */}
              </div>
              {/* <div className="col-12 col-md-4 pr-0 d-flex align-items-center">
                <img
                  src="/image/Product_images/Rectangle 4036.png"
                  alt="Solar-powered boom barrier"
                  className="img-fluid Solar-powered "
                />
              </div> */}
              {/* <div className="col-12 col-md-4 d-flex align-items-center">
                <p className="soltexrt">
                  <span style={{ color: "green" }}>
                    Introducing our solar-powered boom barrier gate
                  </span>
                  <br />
                  equipped with an external solar panel and a 24V reserve power
                  supply.
                  <br />
                  Say goodbye to traditional 220V
                </p>
              </div> */}
            </div>
            <div className="media-wrapper">
              <div className="Application mb-4">
                <h4 style={{ textAlign: "center" }} className="card-title mb-4 fw-semibold">
                  Media / Gallery
                </h4>
              </div>
              <div className="row">
                <div className="col">
                  <Swiper
                    ref={swiperRef}
                    direction="horizontal"
                    loop={true}
                    autoHeight={false}
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      992: {
                        slidesPerView: 3,
                        spaceBetween: 70,
                      },
                      430: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                    }}
                    modules={[Autoplay]}
                    onSlideChange={handleSlideChange}
                    onInit={handleSlideChange}
                  >
                    {mediaimg.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="media-card">
                          <img
                            src={item.img}
                            alt={`Media ${index}`}
                            className="media-testimonial-image"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <Container>
              <h4 className="text-center mb-4 fw-semibold">Get in Touch</h4>
              <Form>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        className="mb-3"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formParking">
                      <Form.Control
                        type="text"
                        placeholder="Parking"
                        className="mb-3"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="mb-3"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Control
                        type="tel"
                        placeholder="Phone"
                        className="mb-3"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Form.Group controlId="formMessage">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Write Message..."
                        className="mb-3"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="text-center">
                  <Col xs={12}>
                    <Button variant="primary" type="submit" className="px-5">
                      SUBMIT
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div>
          <div className="contact-form-footer">
  <div className="row align-items-center">
    {/* QR Code Column */}
    <div className="col-md-2 col-12 text-center mb-3 mb-md-0 contact-form-qr-code-col">
      <img
        src={qr}
        alt="QR Code"
        className="img-fluid contact-form-qr-code"
        style={{ maxWidth: '150px' }}
      />
    </div>

    {/* Text Column */}
    <div className="col-md-10 col-12 text-center contact-form-text-col">
      <div className="contact-form-footer-text">
        <div className="qrcode">
          <p className="mb-1">
            Discover our extensive range of innovative products
          </p>
          <p className="mb-0" style={{ marginTop: isMobile ? '-10px':'-30px'}}>
            simply scan to explore more
          </p>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bollard2des;
