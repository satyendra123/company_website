import React, { useState, useEffect } from "react";
import shutterh180 from "./ShutdoormotorIMG/Shutterh180.png";
import "./Shut.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./ShutdoormotorIMG/Shutdooricons/2ywarranty.png";
import icon2 from "./ShutdoormotorIMG/Shutdooricons/Esunkitwarranty.png";
import icon3 from "./ShutdoormotorIMG/Shutdooricons/100percentage.png";

const Shutdoor2 = () => {
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
              <h4 className="fw-bold">SHUTTER H180</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Versatile Automation for Shutter Systems
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    The SHUTTER H180 is meticulously crafted to meet diverse shutter automation needs, from light-duty residential requirements to heavy-duty industrial applications. With its robust design and advanced functionality, this system ensures smooth and reliable operation across various settings.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={shutterh180}
                    alt="SHUTTER H180"
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
                  The SHUTTER H180 is meticulously crafted to meet diverse shutter automation needs, from light-duty residential requirements to heavy-duty industrial applications. With its robust design and advanced functionality, this system ensures smooth and reliable operation across various settings.
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={3} className="text-center">
                <Image
                  src={shutterh180}
                  alt="SHUTTER H180"
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

export default Shutdoor2;
