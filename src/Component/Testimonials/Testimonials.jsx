import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Testimonials.css";
import Star from "./TestimonialImages/star.png";
import Client1 from "./TestimonialImages/anil_gupta.png";
import Client2 from "./TestimonialImages/ap_dubey.png";
import Client3 from "./TestimonialImages/athar_ali.png";
import Client4 from "./TestimonialImages/jaipal.png";
import Client5 from "./TestimonialImages/nishant.png";
import Client6 from "./TestimonialImages/priyank.jpeg";
import Client7 from "./TestimonialImages/rahul_jyoshi.jpeg";

const testimonials = [
  {
    name: "Anil Gupta",
    title: "V Consultant",
    description:
      "We have had the pleasure of partnering with Houston Systems Pvt. Ltd. for our security solutions needs, and the experience has been exceptional. What truly sets Houston Systems apart is not only their high-quality products but their commitment to guiding teams that may not be technically sound. Their team patiently walked us through every step of the process, providing detailed training and support, ensuring that even those with minimal technical expertise could confidently manage and operate the systems.",
    rating: 5,
    imageUrl: Client1,
  },
  {
    name: "A P Dubey",
    title: "GM, Rites",
    description:
      "I had a great experience working with Houston Systems Pvt. Ltd. Their team is professional, knowledgeable, and very supportive. They provided us with high-quality security solutions that perfectly met our needs. The installation process was smooth, and their customer service is excellent. I highly recommend Houston Systems for anyone looking for reliable security products and services.",
    rating: 4,
    imageUrl: Client2,
  },
  {
    name: "Athar Ali",
    title: "WAC Consultant",
    description:
      "Houston Systems guided us from start to finish, conducting thorough site visits, inspections, and project studies. Their hands-on support and expertise helped us implement a customized solution that exceeded our expectations. We’re extremely satisfied with their service and dedication.",
    rating: 5,
    imageUrl: Client3,
  },
  {
    name: "Jaipal",
    title: "PMC Head",
    description:
      "Houston Systems delivered exactly what we needed. Their attention to detail—from initial state to final project delivery—was impressive. Their expertise made the entire process smooth and efficient. A trusted partner we would recommend without hesitation.",
    rating: 5,
    imageUrl: Client4,
  },
  {
    name: "Nishant",
    title: "Owner, Technify",
    description:
      "Our experience with Houston Systems Pvt. Ltd. has been exceptional from start to finish. Their team not only understood our vision but also brought invaluable insights and suggestions to the table, which made our project even better than we had imagined.",
    rating: 5,
    imageUrl: Client5,
  },
  {
    name: "Priyank",
    title: "APL Apollo",
    description:
      "Working with Houston Systems Pvt. Ltd. has been a transformative experience for our business. Their team’s expertise and innovative approach enabled us to streamline operations and enhance our tech infrastructure in ways we hadn’t imagined.Their insights helped us tackle complex challenges efficiently, giving us an edge in a competitive market.",
    rating: 5,
    imageUrl: Client6,
  },
  {
    name: "Rahul Jyoshi",
    title: "Tractable Architect",
    description:
      "Houston Systems Pvt. Ltd. has been an absolute game-changer for our company! The level of customer service and support they offer is unmatched. Their team is always just a call or email away, ready to assist with any issue or question, no matter how big or small. They took the time to understand our needs and provided a customized solution that has greatly improved our daily operations.",
    rating: 5,
    imageUrl: Client7,
  },
];

const Testimonials = () => {
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
    <div style={{ marginTop: "30px" }}>
      <div className="case-study-header">
        <h2 className="case-study-header-text">Customers Own Word</h2>

        <h2 className="case-study-sub-header-text">
          Here’s what our <span> customers have said </span>
        </h2>
      </div>
      <div className="testimonialslider">
        <div
          className="testimonial-wrapper"
          style={{ textAlign: "center", padding: "10px" }}
        >
          <Swiper
            ref={swiperRef}
            direction="horizontal"
            loop={true}
            autoHeight={false}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className="testimoniacard-custom"
                  style={{ flex: "0 0 90%" }}
                >
                  <div className="d-flex">
                    <div
                      className="testimonialogo"
                      style={{
                        backgroundImage: `url(${testimonial.imageUrl})`,
                      }}
                    ></div>
                    <div className="mt-4 ml-2">
                      <div className="testimonianame">{testimonial.name}</div>
                      <div className="testimoniatitle">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                  <div className="container-custom">
                    <div className="testimoniadescription text-justify">
                      <ReadMoreText text={testimonial.description} />
                    </div>
                    <div className="testimoniarating">
                      {Array(testimonial.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="star">
                            <img className="starlogo" src={Star} alt="star"></img>
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const ReadMoreText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");
  const hasMore = words.length > 18;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded ? text : words.slice(0, 18).join(" ") + (hasMore ? "..." : "")}
      {hasMore && (
        <span
          onClick={toggleReadMore}
          style={{ color: "gray", cursor: "pointer" }}
        >
          {isExpanded ? " Read Less" : " Read More"}
        </span>
      )}
    </div>
  );
};

export default Testimonials;
