import React from "react";
import Turner150 from "./Tripodimg/turnerc150.png";
import "./Turnerc100.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./Tripodimg/Tripodoneicons/2ywarranty.png";
import icon2 from "./Tripodimg/Tripodoneicons/10ywarranty.png";
import icon3 from "./Tripodimg/Tripodoneicons/Automatic.png";

const Turnerc150 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">TURNER C150</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Innovative Design Meets Advanced Accessibility
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            Designed for spaces that demand style and functionality, the Turner c150 stands out with its wide passage width, contemporary aesthetics, and state-of-the-art sensor technology. Perfect for accommodating a diverse range of users while maintaining optimal security.

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
    <span className="text-center" style={{ fontSize: "8.5px" }}>Year warranty</span>
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


