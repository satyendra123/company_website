import React, { useState, useEffect } from "react";
import Huricane_ from "./ProductsubfeauresIMG/Hurricane.png";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./ProductsubfeauresIMG/Productfeaturesicons/2ywarranty.png";
import icon2 from "./ProductsubfeauresIMG/Productfeaturesicons/5ywarranty.png";
import icon3 from "./ProductsubfeauresIMG/Productfeaturesicons/Esunkitwarranty.png";

const Huricane = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);  // Set 768px as the breakpoint for mobile
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
              <h4 className="fw-bold">HURRICANE</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Industrial Power and Precision
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    The Hurricane boom barrier is the ultimate solution for industrial use, perfect for factories, logistics
                    centers, and refineries. Designed for stability and quiet operation, it provides maximum passage clearance
                    even in the most challenging environments. Experience unmatched reliability and efficiency with Hurricane.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={Huricane_}
                    alt="Huricane"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Year warranty</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon2} alt="Million cycle" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Million cycle</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon3} alt="E-Sun Kit" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>E-Sun Kit</span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  The Hurricane boom barrier is the ultimate solution for industrial use, perfect for factories, logistics
                  centers, and refineries. Designed for stability and quiet operation, it provides maximum passage clearance
                  even in the most challenging environments. Experience unmatched reliability and efficiency with Hurricane.
                </p>
              </Col>

              <Col md={1}></Col>

              {/* Image */}
              <Col md={3} className="text-center">
                <Image
                  src={Huricane_}
                  alt="Huricane"
                  style={{ height: '150px', width: "100%" }}
                />
              </Col>

              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Year warranty</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon2} alt="Million cycle" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Million cycle</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon3} alt="E-Sun Kit" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>E-Sun Kit</span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Huricane;
