import React from "react";
import Turner150 from "./TRIPODEIMG/Turnerc150.png";
import "./Turnerc100.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./TRIPODEIMG/Tripodtwoicons/2ywarranty.png";
import icon2 from "./TRIPODEIMG/Tripodtwoicons/7ywarranty.png";
import icon3 from "./TRIPODEIMG/Tripodtwoicons/Automatic.png";
    
const Turnerc150 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold text-uppercase">Turner C150</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>The Perfect Balance of Style and Accessibility
              </h6>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            Engineered for modern accessibility, the Turner c150 blends stylish aesthetics with high functionality. Its wide passage width, durable design, and cutting-edge sensor technology make it an ideal solution for contemporary access needs.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={Turner150}
                alt="flaptiler80"
                style={{ height: '150px', width: "100%" }}
              />
            </Col>

            <Col md={2} className="d-flex flex-column align-items-center">
  <div className="d-flex flex-column align-items-center">
    <Image src={icon1} alt="Warranty" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>2y warranty</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon2} alt="Icon 2" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>MCBF</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon3} alt="Icon 3" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>
    Automatic Version
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Turnerc150


