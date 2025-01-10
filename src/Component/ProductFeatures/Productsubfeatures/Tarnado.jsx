import React, { useState, useEffect } from "react";
import Tarnado_ from "./ProductsubfeauresIMG/Tornado.png";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./ProductsubfeauresIMG/Productfeaturesicons/2ywarranty.png";
import icon2 from "./ProductsubfeauresIMG/Productfeaturesicons/10ywarranty.png";
import icon3 from "./ProductsubfeauresIMG/Productfeaturesicons/Esunkitwarranty.png";

const Tarnado = () => {
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
              <h4 className="fw-bold">TORNADO</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87", fontSize: "1.5rem" }}>
                Precision Toll Barrier
              </h6>
            </Col>
          </Row>

          {isMobile ? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    The Tornado series of automatic boom barriers is engineered for unmatched efficiency in toll operations.
                    With lightning-fast, adjustable opening speeds from 2 to 6 seconds, it delivers precise, secure access
                    every time. Experience the power of rapid, reliable toll management with Tornado.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                <Col xs={9} className="mb-3">
                  <Image
                    src={Tarnado_}
                    alt="Tornado"
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
                  The Tornado series of automatic boom barriers is engineered for unmatched efficiency in toll operations.
                  With lightning-fast, adjustable opening speeds from 2 to 6 seconds, it delivers precise, secure access
                  every time. Experience the power of rapid, reliable toll management with Tornado.
                </p>
              </Col>

              <Col md={1}></Col>

              {/* Image */}
              <Col md={3} className="text-center">
                <Image
                  src={Tarnado_}
                  alt="Tornado"
                  style={{ height: "150px", width: "100%" }}
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

export default Tarnado;
