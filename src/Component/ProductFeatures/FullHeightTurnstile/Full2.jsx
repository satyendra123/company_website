import React from "react";
import full2 from "./FullheigtturnstileImg/FULL HEIGHT 2200.png";
import "./Full.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./FullheigtturnstileImg/fhturnstileicons/2ywarranty.png";
import icon2 from "./FullheigtturnstileImg/fhturnstileicons/10ywarranty.png";
import icon3 from "./FullheigtturnstileImg/fhturnstileicons/Automatic.png";

const Full2 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">FULL HEIGHT 2200</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Redefining Secure Passage Solutions
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            Redefining Secure Passage Solutions
Tailored for diverse security and operational requirements, the Full Height 2200 boasts premium-grade finishes, including stainless steel, powder coating, and hot-dipped galvanization. Designed for durability and high-traffic environments, it guarantees long-term performance.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={full2}
                alt="flaptiler80"
                style={{ height: '150px', width: "100%" }}
              />
            </Col>

            <Col md={2} className="d-flex flex-column align-items-center">
  <div className="d-flex flex-column align-items-center">
    <Image src={icon1} alt="Warranty" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>year warranty</span>
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

export default Full2

