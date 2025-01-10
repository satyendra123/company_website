import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Our_Value.css'; // Import external CSS file
import Suport from "./Our_Value_Images/Customer Support.png";
import TeamWork from "./Our_Value_Images/Teamwork.png";
import Group from "./Our_Value_Images/Group 1000001794.png";
import Weight from "./Our_Value_Images/Weight Care.png";

const Our_Value = () => {
  return (
    <Container fluid className="our-value-container">
      <Row className="align-items-center">
        {/* Left Column */}
        <Col md={6} className="text-center text-md-start">
          <h6 className="our-value-title blue">Our Core Value.</h6>
          <h6 className="our-value-left-title">The Principles</h6>
          <h6 className="our-value-left-title">We Live By.</h6>
        </Col>

        {/* Right Column */}
        <Col md={6}>
          <Row>
            {/* First Item */}
            <Col xs={12} md={6} className="mb-4">
              <div className="our-value-item">
                <div className="our-value-image">
                  <img src={Suport} alt="Customer Support" className="img-fluid" />
                </div>
                <h6 className="our-value-title">Customer-Centric Approach</h6>
                <p className="our-value-description">
                  We craft advanced, tailored solutions—software and hardware—to meet unique business challenges.
                </p>
              </div>
            </Col>

            {/* Second Item */}
            <Col xs={12} md={6} className="mb-4">
              <div className="our-value-item">
                <div className="our-value-image">
                  <img src={TeamWork} alt="Teamwork" className="img-fluid" />
                </div>
                <h6 className="our-value-title">Innovation</h6>
                <p className="our-value-description">
                  Years of expertise delivering top-quality products and unparalleled support ensure satisfaction.
                </p>
              </div>
            </Col>

            {/* Third Item */}
            <Col xs={12} md={6} className="mb-4">
              <div className="our-value-item">
                <div className="our-value-image">
                  <img src={Group} alt="Group" className="img-fluid" />
                </div>
                <h6 className="our-value-title">Collaboration</h6>
                <p className="our-value-description">
                  Robust measures prioritize data safety and product reliability against modern cyber threats.
                </p>
              </div>
            </Col>

            {/* Fourth Item */}
            <Col xs={12} md={6} className="mb-4">
              <div className="our-value-item">
                <div className="our-value-image">
                  <img src={Weight} alt="Weight Care" className="img-fluid" />
                </div>
                <h6 className="our-value-title">Integrity</h6>
                <p className="our-value-description">
                  We evolve with technology, ensuring your business stays ahead with the latest advancements.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Our_Value;
