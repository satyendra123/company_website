import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import roaddes3 from "./TYREIMG/AXER B200.png";
import Parkinglots from "./TYREIMG/Parkinglots.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Embasies from "./TYREIMG/Embasies.png";
import Toll from "./TYREIMG/Toll.png";
import tyredimesnions from './TYREIMG/tyredimesnions.png'
import Factory from "./TYREIMG/Factory.png";
import qr from "./TYREIMG/qr.png";
import tyrekiller1 from "./TYREIMG/Midea/TK1.png";
import tyrekiller2 from "./TYREIMG/Midea/TK2.png";
import tyrekiller3 from "./TYREIMG/Midea/TK3.png";
import tyrekiller4 from "./TYREIMG/Midea/tyre killer.png";
import keyspecies from "./TYREIMG/key_species_1/key_species_1.png";
import keyspecies2 from "./TYREIMG/key_species_1/Keyspecies_2.png";
import keyspecies3 from "./TYREIMG/key_species_1/keyspecies3.png";
import keyspecies4 from "./TYREIMG/key_species_1/key_species_5.png";

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
    name: "/image/Product_images/Accessories_img/Accessories 6.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 7.png",
  },
];
const mediaimg = [
  {
    img: tyrekiller1 ,
  },
  {
    img: tyrekiller2,
  },
  {
    img:tyrekiller3,
  },
  {
    img: tyrekiller4,
  },
];
const Dfmd3des = () => {
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

  useEffect(() => {
    handleSlideChange();
  }, []);

  return (
    <div>
      <div className="card2 ">
        <div className="card-body text-center">
          <div className="p-3">
            <h1 className="card-title mb-4 custom-left text-uppercase">TITAN B200</h1>
            <div className="row  mb-5">
            <div className="col-md-4 col-12 ">
                <p className="leftside_top_text">Power Consumption</p>
                <p className="leftside_second_text">100W</p>
                <p className="leftside_top_text">Length</p>
                <p className="leftside_second_text">3-6 Meter</p>
                <p className="leftside_top_text">Material</p>
                <p className="leftside_second_text">Galvanised mild steel</p>
              </div>
              <div className="col-md-4 col-12  custom-image">
                <img src={roaddes3} className="img-fluid" alt="VEGA" />
              </div>
              <div className="col-md-4 col-12 custom-right">
                <p className="rightside_top_text">Load Capacity</p>
                <p className="rightside_second_text">25-50 Ton</p>
                <p className="rightside_top_text">Opening Speed</p>
                <p className="rightside_second_text">2-5 sec Customizable</p>
                <p className="rightside_top_text">Dimension</p>
                <p className="rightside_second_text">3000 * 290 * 430</p>
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
                        src={Parkinglots}
                        className="img-fluid"
                        alt="Oil Icon"
                      />
                    </div>
                    <div className="col-auto cardApp">
                      <img
                        src={Embasies}
                        className="img-fluid"
                        alt="Gate Icon"
                      />
                    </div>
                  </div>
                  <div className="row mt-3 residentimg justify-content-around">
                    <div className="col-auto cardApp">
                      <img
                        src={Toll}
                        className="img-fluid"
                        alt="Oil Icon"
                      />
                    </div>
                    <div className="col-auto cardApp">
                      <img
                        src={Factory}
                        className="img-fluid"
                        alt="Gate Icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 d-flex align-items-center">
                  <div className="row justify-content-around">
                    <p className="Appconte">
                    Axle breakers are installed in highly sensitive areas like data centers, defence facilities, and VIP zones to immobilize unauthorized heavy vehicles.
                    </p>
                  </div>
                </div>
              </div>
  </div>
{/* end application  */}


   {/* start Integration option */}
   <div className="Application">
              <h4 className="card-title mb-4 fw-semibold">Integration options</h4>
              <div className="row ">
                <div className="Integrationcardimg">
                  <img
                    src="/image/Product_images/Integrationoptions_img/Roadbreaker_integration.png"
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
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                  },
                  765: {
                    slidesPerView: 4,
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
            </div>
            <div className="media-wrapper">
              <div className="Application mb-4">
                <h4 className="card-title mb-4 fw-semibold">Media / Gallery</h4>
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
                        spaceBetween: 20,
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
                  src="image/Product_images/download 6.png"
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

export default Dfmd3des;
