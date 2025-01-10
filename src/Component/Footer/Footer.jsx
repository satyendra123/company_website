import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Footer.css";
import BrandLogo from "../BrandLogo/BrandLogo";
const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent default behavior of the anchor tag
    navigate("/ContactUs"); // Navigate to the Contact component
  };
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/contact/subscribe/',
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      );
    
      console.log('Response:', response.data); // Debugging line
      if (response.status === 200) {
        setMessage('Successfully subscribed!');
        alert('Thank you for subscribing!'); // Show alert on successful submission
        setEmail('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error); // Debugging line
      setMessage('Error: ' + error.message);
    }
  }
    

  return (
    <footer class="footer-section mt-5">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>
                    D 148, EPIP, Kasna, Surajpur Site V,
                    <p>Greater Noida, Uttar Pradesh, 201310 </p>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
  <a href="tel:+919999126882" >
    <div class="single-cta"  style={{ cursor: 'pointer' }}>
      <i class="fas fa-phone"></i>
      <div class="cta-text">
        <h4>Call us</h4>
        <span>+91 99991 26882</span>
      </div>
    </div>
  </a>
</div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>digital@houstonsystem.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <BrandLogo />
                  </Link>
                </div>
                <div class="footer-text">
                  <p>
                    Houston Systems Pvt. Ltd. delivers reliable security and access solutions, prioritizing safety and meeting the evolving needs of clients with a proven track record.
                  </p>
                </div>
                <div class="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://www.facebook.com/HoustonSystem">
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="https://twitter.com/SystemsHouston">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="https://www.instagram.com/houstonsystems/">
                    <i class="fab fa-instagram google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul className="footer-ul">
                  <li>
                  <a href="/">Home</a>
                  {/* Update this to use Link */}
                  </li>
                 
                  <li>
                    <a href="/product/boombarrier">Products</a>{" "}
                    {/* Update this to use Link */}
                  </li>
                
                  <li>
                  <a href="/contact">
                      Contact
                  </a>
                  </li>
                  <li>
                    <a href="/solution/parking-guidance-system">Solutions</a>
                    {/* Update this to use Link */}
                  </li>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/services/Softwaredevelopment">Services</a>
                  </li>
                 
                  <li>
                    <a href="#">Latest Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
      <div className="footer-widget">
        <div className="footer-widget-heading">
          <h3>Subscribe</h3>
        </div>
        <div className="footer-text mb-25">
          <p>
            Don’t miss to subscribing our new feeds, kindly fill the form below.
          </p>
        </div>
        <div className="subscribe-form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              <i className="fab fa-telegram-plane"></i>
            </button>
          </form>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2024, All Right Reserved :{" "}
                  <a href="/terms-and-conditions">Houston Systems Pvt. Ltd.</a>
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul className="footer-ul">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">Terms</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy</a>
                  </li>
                  {/* <li>
                    <a href="#">Policy</a>
                  </li> */}
                  <li>
                  <a href="/contact">
                       Contact
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
