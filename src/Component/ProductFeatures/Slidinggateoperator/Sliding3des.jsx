import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import solari from "./SlidinggateoperatorIMG/solari.png";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import carporate from "./SlidinggateoperatorIMG/corporate.png";
import warehouse from "./SlidinggateoperatorIMG/warehouse.png";
import Sliding_dimensions from "./SlidinggateoperatorIMG/Sliding_dimensions.png";
import Residential from "./SlidinggateoperatorIMG/Residential.png";
import govt from "./SlidinggateoperatorIMG/govt.png";
import qr from "./SlidinggateoperatorIMG/qr.png";

import keyspecies1 from './SlidinggateoperatorIMG/key_species/Keyspecies_1.png'
import keyspecies2 from './SlidinggateoperatorIMG/key_species/Keyspecies_2.png'
import keyspecies3 from './SlidinggateoperatorIMG/key_species/Keyspecies_3.png'
import keyspecies4 from './SlidinggateoperatorIMG/key_species/Keyspecies_4.png'


const testimonials = [
  {
    name: "/image/Product_images/Accessories_img/Accessories 5.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 7.png",
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
    img: "/image/Product_images/media_img/Rectangle 3995.png",
  },
  {
    img: "/image/Product_images/media_img/Rectangle 3994.png",
  },
  {
    img: "/image/Product_images/media_img/Rectangle 3995.png",
  },
  {
    img: "/image/Product_images/media_img/Rectangle 3995.png",
  },
];


const Sliding3des = () => {
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
            <h4 className="card-title mb-4 custom-left fw-semibold">Solari</h4>
            <div className="row  mb-5">
            <div className="col-md-4 col-12 ">
                <p className="leftside_top_text">Power Supply</p>
                <p className="leftside_second_text"> 24V DC</p>
                <p className="leftside_top_text">Length</p>
                <p className="leftside_second_text">12 Meter</p>
                <p className="leftside_top_text">Duty Cycle</p>
                <p className="leftside_second_text">95%</p>
              </div>
              <div className="col-md-4 col-12  custom-image">
                <img src={solari} className="img-fluid" alt="VEGA" />
              </div>
              <div className="col-md-4 col-12 custom-right">
                <p className="rightside_top_text">Capacity</p>
                <p className="rightside_second_text"> 2500KG</p>
                <p className="rightside_top_text">Opening Speed</p>
                <p className="rightside_second_text"> 10 Meter/Min</p>
                <p className="rightside_top_text">Thrust</p>
                <p className="rightside_second_text"> 1650 N</p>
              </div>
            </div>

{/*start specs */}
<div className="row align-items-center">
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
            src={keyspecies1}
            className="img-fluid"
            alt="Oil Icon"
            style={{ maxWidth: "60px", maxHeight: "60px" }} // Adjust the max size of the image
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
</div>

{/* start application  */}

<div className="Application mb-4">
              <h4 className="card-title mb-4 fw-semibold">Application Area</h4>
              <div className="row ">
                <div className="col-md-6 col-12">
                  <div className="row residentimg justify-content-around">
                    <div className="col-auto cardApp">
                      <img
                        src={carporate}
                        className="img-fluid"
                        alt="Oil Icon"
                      />
                    </div>
                    <div className="col-auto cardApp">
                      <img
                        src={warehouse}
                        className="img-fluid"
                        alt="Gate Icon"
                      />
                    </div>
                  </div>
                  <div className="row mt-3 residentimg justify-content-around">
                    <div className="col-auto cardApp">
                      <img
                        src={Residential}
                        className="img-fluid"
                        alt="Oil Icon"
                      />
                    </div>
                    <div className="col-auto cardApp">
                      <img
                        src={govt}
                        className="img-fluid"
                        alt="Gate Icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 d-flex align-items-center">
                  <div className="row justify-content-around">
                    <p className="Appconte">
                    Sliding gate operators are perfect for automated access control in industrial premises, gated communities, and private properties, ensuring secure and convenient entry/exit.

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
      <h4 className="fw-semibold">Dimension And Layout</h4>
    </Col>
  </Row>

  {/* Main Content */}
  <Row className="align-items-center">
  {/* Content Section */}
  <Col md={6} className="text-center mb-4">
    <div
      className="p-4 shadow-sm mx-auto"
      style={{
        backgroundColor: "#f9f9f9",
        maxWidth: "400px",
      }}
    >
      <p style={{ fontFamily: "Cambria", textAlign: "left" }}>
        Houston's sliding gate operators are built to handle gates of different lengths, weights, and opening clearances, delivering smooth, dependable operation. Designed for durability and adaptability, they seamlessly integrate with varied site layouts to meet precise access control needs.
      </p>
    </div>
  </Col>
  {/* Image Section */}
  <Col md={6} className="text-center">
    <img
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
      src={Sliding_dimensions}
      alt="Boom Barrier Diagram"
      className="img-fluid"
    />
  </Col>
</Row>
</Container>

{/* start Integration option */}
<div className="Application">
              <h4 className="card-title mb-4 fw-semibold">Integration options</h4>
              <div className="row ">
                <div className="Integrationcardimg">
                  <img
                    src="/image/Product_images/Integrationoptions_img/SlidingGateintegration.png"
                    className="img-fluid main-image" style={{width:"70%", marginLeft:"80px"}}
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
            <div className="row">
              <div className="col-md-2 col-12 contact-form-qr-code-col">
                <img
                  src={qr}
                  alt="QR Code"
                  className="contact-form-img-fluid contact-form-qr-code"
                />
              </div>
              <div className="col-md-10 col-12 contact-form-text-col">
                <div className="contact-form-footer-text">
                  <div className="row">
                  <div className="col-12 qrcode mt-2">
                            <p className="text-center">
                              Discover our extensive range of innovative products
                            </p>
                            <p className="text-center" style={{ marginTop: '-35px' }}>
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
    </div>
  );
};

export default Sliding3des;
