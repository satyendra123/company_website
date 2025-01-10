import React, { useState, useEffect } from "react";
import turnerc200 from "./Tripodimg/Turnerc200.png";
import "./Turnerc100.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./Tripodimg/Tripodoneicons/2ywarranty.png";
import icon2 from "./Tripodimg/Tripodoneicons/10ywarranty.png";
import icon3 from "./Tripodimg/Tripodoneicons/Automatic.png";

const Turenerc200 = ({ isMobileView }) => {
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
              <h4 className="fw-bold">TURNER C200</h4>
              <h6
                className="fw-semibold"
                style={{ color: "#084D87", fontSize: "1.5rem" }}
              >
                Compact and Intelligent Access Management Solution
              </h6>
            </Col>
          </Row>

          {isMobile? (
            <>
              <div className="d-flex flex-column align-items-center mb-3">
                <div className="text-justify mb-3">
                  <p>
                    Optimize your security checkpoints with the Turner C200, a
                    space-efficient turnstile offering built-in multi-format
                    readers and integrated card capture capabilities. This
                    innovative system streamlines communication and enhances
                    security, making it a perfect choice for businesses and
                    public spaces.
                  </p>
                </div>
              </div>

              <Row className="mb-3">
                {/* Image in first Col */}
                <Col xs={9} className="mb-3">
                  <Image
                    src={turnerc200}
                    alt="Turner C200"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
                  />
                </Col>

                {/* Icons in second Col */}
                <Col xs={3} className="mb-2">
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon1} alt="Warranty" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>
                      Year warranty
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon2} alt="MCBF" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>
                      MCBF
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-1">
                    <Image src={icon3} alt="Automatic Version" className="mb-1" />
                    <span className="text-center" style={{ fontSize: "8.5px" }}>
                      Automatic Version
                    </span>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            // Desktop Layout
            <Row className="align-items-center">
              <Col md={6}>
                <p className="text-justify">
                  Optimize your security checkpoints with the Turner C200, a
                  space-efficient turnstile offering built-in multi-format
                  readers and integrated card capture capabilities. This
                  innovative system streamlines communication and enhances
                  security, making it a perfect choice for businesses and public
                  spaces.
                </p>
              </Col>
              <Col md={1}></Col>

              {/* Image */}
              <Col md={3} className="text-center">
                <Image
                  src={turnerc200}
                  alt="Turner C200"
                  style={{ height: "150px", width: "100%" }}
                />
              </Col>

              {/* Icons */}
              <Col md={2} className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon1} alt="Warranty" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>
                    Year warranty
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon2} alt="MCBF" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>
                    MCBF
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <Image src={icon3} alt="Automatic Version" className="mb-1" />
                  <span className="text-center" style={{ fontSize: "8.5px" }}>
                    Automatic Version
                  </span>
                </div>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Turenerc200;
