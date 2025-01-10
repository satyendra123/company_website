import React, { useState, useEffect } from "react";
import bollard4 from "./BollardImg/Shield-anti-terror.png";
import "./Bollard.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./BollardImg/bollardicons/2ywarranty.png";
import icon2 from "./BollardImg/bollardicons/10ywarranty.png";
import icon3 from "./BollardImg/bollardicons/k4crashrating.png";

const Bollard4 = () => {
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
              <h4 className="fw-bold">SHIELD ANTI-TERROR</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Unyielding Defense for High-Security Environments
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    Engineered with precision, SHIELD ANTI-TERROR is your ultimate solution for anti-terrorist protection.
                    Designed to safeguard valuable assets and surroundings, it offers unmatched reliability, ensuring maximum security and peace of mind in even the most sensitive areas.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={bollard4}
                    alt="Bollard"
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
                    <Image src={icon3} alt="K4 Crash Rating" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>K4 Crash Rating</span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Engineered with precision, SHIELD ANTI-TERROR is your ultimate solution for anti-terrorist protection.
                  Designed to safeguard valuable assets and surroundings, it offers unmatched reliability, ensuring maximum security and peace of mind in even the most sensitive areas.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={bollard4}
                  alt="Bollard"
                  style={{ height: '130px', width: "100%" }}
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
                  <Image src={icon3} alt="K4 Crash Rating" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>K4 Crash Rating</span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Bollard4;
