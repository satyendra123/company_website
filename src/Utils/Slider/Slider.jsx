import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Slider.css";

const Image = ({ index, imageUrl, backgroundColor }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 1, delay: index * 0.2 }
    );
  }, [index]);

  return (
    <li
      className="slider-section-image"
      style={{ "--background-color": backgroundColor }}
      ref={imageRef}
    >
      <div className="slider-section-image-container">
        <img src={imageUrl} alt={`Image ${index}`} />
      </div>
    </li>
  );
};

const Slider = () => {
  const images = [
    { id: "image3", imageUrl: "/mission.png" },
    { id: "image1", imageUrl: "/what_we_offer.png" },
    { id: "image4", imageUrl: "/clean_business_agenda.png" },
    { id: "image2", imageUrl: "/green_solution.png" },
    // { id: "image4", imageUrl: "/WHO_WE_ARE.png" },
  ];
  return (
    <div className="slider-section-container">
      <ul id="slider-section-images">
        {images.map((image, index) => (
          <Image
            key={image.id}
            index={index}
            imageUrl={image.imageUrl}
            backgroundColor={image.backgroundColor}
          />
        ))}
      </ul>
    </div>
  );
};

export default Slider;
