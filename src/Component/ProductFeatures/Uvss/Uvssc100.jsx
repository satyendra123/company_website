import React from "react";
import turnerc100 from "./UVSSIMG/fixeduvss.png";
import "./Uvssc100.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./UVSSIMG/Uvssicons/2ywarranty.png";
import icon2 from "./UVSSIMG/Uvssicons/67iprating.png";
import icon3 from "./UVSSIMG/Uvssicons/15scanningspeed.png";

const Uvssc100 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">SS3090F FIXED UVSS</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Fast, Precise, Wide-Reaching</h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              Ideal for critical checkpoints, it ensures minimal image distortion, rapid processing (under 1 second), and an expansive 180° field of view.
              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={turnerc100}
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
    <span className="text-center" style={{ fontSize: "8.5px" }}>Ip Rating</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon3} alt="Icon 3" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>
    Scanning Speed
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Uvssc100