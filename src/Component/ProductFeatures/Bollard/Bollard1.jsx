import React from "react";
import bollard1 from "./BollardImg/Shield.png";
import "./Bollard.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./BollardImg/bollardicons/2ywarranty.png";
import icon2 from "./BollardImg/bollardicons/10ywarranty.png";
import icon3 from "./BollardImg/bollardicons/k4crashrating.png";

const Bollard1 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">SHIELD</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Welcome to the Doorways of Convenience
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            Experience cutting-edge innovation with SHIELD. By seamlessly integrating electric, hydraulic, and mechanical technologies, it ensures effortless operation and dependable security for all your access control needs. Designed for durability and precision, SHIELD is the ultimate choice for enhanced safety.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={bollard1}
                alt="flaptiler80"
                style={{ height: '150px', width: "100%" }}
              />
            </Col>

            <Col md={2} className="d-flex flex-column align-items-center">
  <div className="d-flex flex-column align-items-center">
    <Image src={icon1} alt="Warranty" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>Year Warranty</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon2} alt="Icon 2" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>MCBF</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon3} alt="Icon 3" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>
    K4 Crash Rating
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Bollard1