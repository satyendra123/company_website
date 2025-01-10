import React, { useState, useEffect } from "react";
import swing4 from "./swinggateoperatorIMG/Olio.png";
import "./Swing.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./swinggateoperatorIMG/Swinggateicons/2ywarranty.png";
import icon2 from "./swinggateoperatorIMG/Swinggateicons/Esunkitwarranty.png";
import icon3 from "./swinggateoperatorIMG/Swinggateicons/100percentage.png";

const Swing4 = () => {
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
              <h4 className="fw-bold">OLEO</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Versatile Gate Automation for Every Requirement
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    Unlock seamless gate control with OLEO, the ultimate solution for modern automation. Whether you need single-wing or dual-wing operation, OLEO adapts effortlessly to meet your specific requirements. Engineered for precision and reliability, this versatile gate actuator ensures smooth and secure functionality, making it the ideal choice for residential.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={swing4}
                    alt="OLEO"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Year warranty</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon2} alt="E-Sun Kit" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>E-Sun Kit</span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon3} alt="Duty Cycle" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>Duty Cycle</span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Unlock seamless gate control with OLEO, the ultimate solution for modern automation. Whether you need single-wing or dual-wing operation, OLEO adapts effortlessly to meet your specific requirements. Engineered for precision and reliability, this versatile gate actuator ensures smooth and secure functionality, making it the ideal choice for residential.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={swing4}
                  alt="OLEO"
                  style={{ height: '150px', width: "100%" }}
                />
              </Col>
              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Year warranty</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon2} alt="E-Sun Kit" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>E-Sun Kit</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon3} alt="Duty Cycle" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>Duty Cycle</span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Swing4;
