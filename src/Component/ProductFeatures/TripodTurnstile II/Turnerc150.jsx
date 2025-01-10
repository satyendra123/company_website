import React, { useState, useEffect } from "react";
import Turner150 from "./TRIPODEIMG/turnerc150.png";
import "./Turnerc100.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./TRIPODEIMG/Tripodtwoicons/2ywarranty.png";
import icon2 from "./TRIPODEIMG/Tripodtwoicons/7ywarranty.png";
import icon3 from "./TRIPODEIMG/Tripodtwoicons/Automatic.png";

const Turnerc150 = ({ isMobileView }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold text-uppercase">Turner C150</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                The Perfect Balance of Style and Accessibility
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            // Mobile View
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    Engineered for modern accessibility, the Turner C150 blends stylish aesthetics with high functionality.
                    Its wide passage width, durable design, and cutting-edge sensor technology make it an ideal solution for contemporary access needs.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                {/* Image in first Col */}
                <Col xs={9} className="mb-3">
                  <Image
                    src={Turner150}
                    alt="Turner C150"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                {/* Icons in second Col */}
                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>2y warranty</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon2} alt="MCBF" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>MCBF</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon3} alt="Automatic Version" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Automatic Version</span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            // Desktop Layout
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Engineered for modern accessibility, the Turner C150 blends stylish aesthetics with high functionality.
                  Its wide passage width, durable design, and cutting-edge sensor technology make it an ideal solution for contemporary access needs.
                </p>
              </Col>
              <Col md={1}></Col>

              {/* Image */}
              <Col md={3} className="text-center">
                <Image
                  src={Turner150}
                  alt="Turner C150"
                  style={{ height: "150px", width: "100%" }}
                />
              </Col>

              {/* Icons */}
              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>2y warranty</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon2} alt="MCBF" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>MCBF</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon3} alt="Automatic Version" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Automatic Version</span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Turnerc150;
