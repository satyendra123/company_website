import React from "react";
import fliptiler80 from "./FlappbarrierIMG/Fliptiler80.png";
import flappbarrier180 from "./FlappbarrierIMG/Fliptiler180.png";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./FlappbarrierIMG/Flapbarriericons/2ywarranty.png";
import icon2 from "./FlappbarrierIMG/Flapbarriericons/10ywarranty.png";
import icon3 from "./FlappbarrierIMG/Flapbarriericons/Automatic.png";

const FlaptileR180 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">FLAPTILE R180</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Welcome to the Doorways to the Convenience</h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
              Fitted with five pairs of infrared sensors, this access control
              barrier manages high traffic effortlessly, allowing versatile lane
              setups.
              </p>
            </Col>

            <Col md={1}>
            </Col>

            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={flappbarrier180}
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

export default FlaptileR180