import React from "react";
import BOOM_BARIER_2 from "./BOOM-BARIER.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
const testimonials = [
  {
    name: "/image/Product_images/Accessories_img/Accessories 5.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 6.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 7.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 8.png",
  },
  {
    name: "/image/Product_images/Accessories_img/Accessories 5.png",
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
const Parkisinfo = () => {
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
    <div className="Container-fluid">
      <div className="card2 ">
        <div className="card-body text-center">
          <div className="p-3">
            <h1 className="card-title mb-4 custom-left">VEGA</h1>
            <div className="row  mb-5">
              <div className="col-md-4 col-12 ">
                <p className="leftside_top_text">Power Supply</p>
                <p className="leftside_second_text"> 24V DC</p>
                <p className="leftside_top_text">Length</p>
                <p className="leftside_second_text">5 Meter</p>
                <p className="leftside_top_text">Protection Class</p>
                <p className="leftside_second_text">IP54</p>
              </div>
              <div className="col-md-4 col-12  custom-image">
                <img src={BOOM_BARIER_2} className="img-fluid" alt="VEGA" />
              </div>
              <div className="col-md-4 col-12 custom-right">
                <p className="rightside_top_text">Capacity</p>
                <p className="rightside_second_text"> 500KG</p>
                <p className="rightside_top_text">Opening Speed</p>
                <p className="rightside_second_text"> 12 Meter/Min</p>
                <p className="rightside_top_text">Thrust</p>
                <p className="rightside_second_text"> 350 N</p>
              </div>
            </div>

            <div className="row align-items-center ">
              <div className="col-2">
                <p className="key-specs-text">KEY SPECS.</p>
              </div>
              <div className="col-1">
                <div className="vertical-border"></div>
              </div>
              <div className="col">
                <div className="row justify-content-around">
                  <div className="col-auto cardkey">
                    <div className="cardimg">
                      <img
                        src="/image/Product_images/all.png"
                        className="img-fluid"
                        alt="Oil Icon"
                      />
                    </div>
                  </div>
                  <div className="col-auto cardkey">
                    <div className="cardimg">
                      <img
                        src="/image/Product_images/all (2).png"
                        className="img-fluid"
                        alt="Gate Icon"
                      />
                    </div>
                  </div>
                  <div className="col-auto cardkey">
                    <div className="cardimg">
                      <img
                        src="/image/Product_images/all (3).png"
                        className="img-fluid"
                        alt="Mechanism Icon"
                      />
                    </div>
                  </div>
                  <div className="col-auto cardkey">
                    <div className="cardimg">
                      <img
                        src="/image/Product_images/all (4).png"
                        className="img-fluid"
                        alt="Measurement Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Application mb-4">
              <h1 className="card-title mb-4">APPLICATION AREA</h1>
              <div className="row ">
                <div className="col-md-6 col-12">
                  <div className="row residentimg justify-content-around">
                    <div className="col-auto cardApp">
                      <img
                        src="/image/Product_images/ApplicationArea_img/Application Areas 4.png"
                        className="img-fluid"
                        alt="Oil Icon"
                      />
                    </div>
                    <div className="col-auto cardApp">
                      <img
                        src="/image/Product_images/ApplicationArea_img/Application Areas 5.png"
                        className="img-fluid"
                        alt="Gate Icon"
                      />
                    </div>
                  </div>
                  <div className="row mt-3 residentimg justify-content-around">
                    <div className="col-auto cardApp">
                      <img
                        src="/image/Product_images/ApplicationArea_img/Application Areas 6.png"
                        className="img-fluid"
                        alt="Oil Icon"
                      />
                    </div>
                    <div className="col-auto cardApp">
                      <img
                        src="/image/Product_images/ApplicationArea_img/Application Areas 7.png"
                        className="img-fluid"
                        alt="Gate Icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row justify-content-around">
                    <p className="Appconte">
                      Lorem ipsum dolor sit amet consectetur. Tortor vitae
                      aliquet sit rutrum integer massa hendrerit varius. Eget
                      nunc volutpat sagittis ac faucibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Application">
              <h1 className="card-title mb-4">Integration options</h1>
              <div className="row ">
                <div className="Integrationcardimg">
                  <img
                    src="/image/Product_images/Group 1000002003.png"
                    className="img-fluid main-image"
                    alt="Measurement Icon"
                  />
                  <img
                    className="overlay-Integrationcardimg"
                    src="/image/Product_images/Integrationoptions_img/Group.png"
                    alt="Group.png"
                  />
                  <img
                    className="overlay-Integrationcardimg"
                    src="/image/Product_images/Integrationoptions_img/Vector (1).png"
                    alt="Group.png"
                  />
                  <img
                    className="overlay-Integrationcardimg"
                    src="/image/Product_images/Integrationoptions_img/Vector (2).png"
                    alt="Group.png"
                  />
                  <img
                    className="overlay-Integrationcardimg"
                    src="/image/Product_images/Integrationoptions_img/Vector (3).png"
                    alt="Group.png"
                  />
                  <img
                    className="overlay-Integrationcardimg"
                    src="/image/Product_images/Integrationoptions_img/Group 1000002009.png"
                    alt="Group.png"
                  />
                  <img
                    className="overlay-Integrationcardimg"
                    src="/image/Product_images/Integrationoptions_img/Group 1000002005.png"
                    alt="Group.png"
                  />
                  <img
                    className="overlay-Integrationcardimg"
                    src="/image/Product_images/Integrationoptions_img/Tornado.png"
                    alt="Group.png"
                  />
                  <img
                    className="overlay-Integrationcardimg"
                    src="/image/Product_images/Integrationoptions_img/Vector (4).png"
                    alt="Group.png"
                  />
                </div>
              </div>
            </div>
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
                <h1 className="card-title mb-4">Media / Gallery</h1>
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
            <div className=" Application contact-form-container">
              <h1 className="card-title ">GET IN TOUCH</h1>
              <hr className="contact-form-underline" />

              <form>
                <div className="row mb-3 contact-form-row">
                  <div className="col-md-6 col-12">
                    <div className="contact-form-form-group">
                      <input
                        type="text"
                        className="contact-form-form-control"
                        placeholder="  Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="contact-form-form-group">
                      <input
                        type="text"
                        className="contact-form-form-control"
                        placeholder="  Parki"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-3 contact-form-row">
                  <div className="col-md-6 col-12">
                    <div className="contact-form-form-group">
                      <input
                        type="email"
                        className="contact-form-form-control"
                        placeholder="  Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="contact-form-form-group">
                      <input
                        type="tel"
                        className="contact-form-form-control"
                        placeholder="  Phone"
                      />
                    </div>
                  </div>
                </div>

                <div className="contact-form-form-group mb-3 d-flex align-items-center justify-content-between">
                  <textarea
                    className="contact-form-form-control w-75 me-2"
                    rows="3"
                    placeholder="   Write Message..."
                  ></textarea>
                  <button
                    type="submit"
                    className="contact-form-btn-primary w-25 ml-2"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
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
                    <div className="col-md-5 col-12">
                      <h5>UT POSSIMUS QUI UT</h5>
                    </div>
                    <div className="col-md-6 col-12">
                      <p>
                        Want ToUt Possimus Qui Ut Temporibus
                        <br />
                        More --&gt;
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

export default Parkisinfo;
