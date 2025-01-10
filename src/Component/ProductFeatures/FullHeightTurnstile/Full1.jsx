import React, { useState, useEffect } from "react";
import full1 from "./FullheigtturnstileImg/FULL HEIGHT 1100.png";
import "./Full.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./FullheigtturnstileImg/fhturnstileicons/2ywarranty.png";
import icon2 from "./FullheigtturnstileImg/fhturnstileicons/10ywarranty.png";
import icon3 from "./FullheigtturnstileImg/fhturnstileicons/Automatic.png";

const Full1 = () => {
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
              <h4 className="fw-bold">FULL HEIGHT 1100</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                The Gateway to Seamless Entry and Exit
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    Engineered with advanced electromechanical safeguards, this model ensures controlled access with precision. Its integrated hydraulic shock absorber delivers quiet, smooth operation, enhancing user experience while maintaining robust security.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={full1}
                    alt="Full Height Turnstile"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Year Warranty</span>
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
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Engineered with advanced electromechanical safeguards, this model ensures controlled access with precision. Its integrated hydraulic shock absorber delivers quiet, smooth operation, enhancing user experience while maintaining robust security.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={full1}
                  alt="Full Height Turnstile"
                  style={{ height: "150px", width: "100%" }}
                />
              </Col>
              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Year Warranty</span>
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

export default Full1;
