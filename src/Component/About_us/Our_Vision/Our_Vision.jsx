import React, {useState, useEffect} from 'react';
import Light from '../../About_us/Our_Vision/Our_Vision_Images/Light.png';
import Hundrets from '../../About_us/Our_Vision/Our_Vision_Images/Hundred Points.png';
import Puzzle from '../../About_us/Our_Vision/Our_Vision_Images/Puzzle.png';
import Security from "../../About_us/Our_Vision/Our_Vision_Images/Security Lock.png";
import support from "../../About_us/Our_Vision/Our_Vision_Images/Customer Support.png"
import Reset from "../../About_us/Our_Vision/Our_Vision_Images/Reset.png"
import './Our_Vision.css'; // Import external CSS file

const Our_Vision = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`our_vision-container ${isMobile ? 'p-2' : ''}`}>
    <div>
  <h3 className="text-center text-line-one">
    Our Vision
  </h3>

  <h3 className={`${isMobile ? 'font-bold, ml-5' : 'text-center text-line-two'}`}>
          Your Goals - Our Mission
        </h3>

  <h6 className="text-center text-line-three">
    Let's Succeed Together
  </h6>
</div>

      <div className="our_vision-section">
        {/* First Item */}
        <div className="our_vision-item">
          <div className="our_vision-image">
            <img src={Light} alt="Trophy" />
          </div>
          <h6 className="our_vision-title">Innovative</h6>
          <h6 className="our_vision-title">Solutions</h6>

          <p className="our_vision-description">
          We craft advanced, tailored solutions—software and hardware—to meet unique business challenges.      </p>
        </div>

        {/* Second Item */}
        <div className="our_vision-item">
          <div className="our_vision-image">
            <img src={Hundrets} alt="Natural Food" />
          </div>
          <h6 className="our_vision-title">Proven</h6>
          <h6 className="our_vision-title">Excellence</h6>

          <p className="our_vision-description">
          Years of expertise delivering top-quality products and unparalleled support ensure satisfaction.          </p>
        </div>

        {/* Third Item */}
        <div className="our_vision-item">
          <div className="our_vision-image">
            <img src={Puzzle} alt="Two Hands" />
          </div>
          <h6 className="our_vision-title">Custom
          </h6>
          <h6 className="our_vision-title">Flexibility
          </h6>
          <p className="our_vision-description">
          Our adaptable solutions are tailored to fit your business goals, from startups to enterprises.         </p>
        </div>
      </div>
      <div className="our_vision-section mt-5" >
        {/* First Item */}
        <div className="our_vision-item">
          <div className="our_vision-image">
            <img src={Security} alt="Trophy" />
          </div>
          <h6 className="our_vision-title">Reliable</h6>
          <h6 className="our_vision-title">Secure</h6>

          <p className="our_vision-description">
          Robust measures prioritize data safety and product reliability against modern cyber threats.         </p>
        </div>

        {/* Second Item */}
        <div className="our_vision-item">
          <div className="our_vision-image">
            <img src={Reset} alt="Natural Food" />
          </div>
          <h6 className="our_vision-title">Continuous</h6>
          <h6 className="our_vision-title">Upgradation</h6>

          <p className="our_vision-description">
          We evolve with technology, ensuring your business stays ahead with the latest advancements          </p>
        </div>

        {/* Third Item */}
        <div className="our_vision-item ">
          <div className="our_vision-image">
            <img src={support} alt="Two Hands" />
          </div>
          <h6 className="our_vision-title">Customer
          </h6>
          <h6 className="our_vision-title">Support
          </h6>
          <p className="our_vision-description">
          Dedicated support ensures seamless service, building lasting client relationships through trust.          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Our_Vision;
