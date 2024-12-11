import React from "react";
import road1 from "./AXELIMG/ROCKER B380.png";
import "./Axel.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./AXELIMG/Axleicons/2ywarranty.png";
import icon2 from "./AXELIMG/Axleicons/10ywarranty.png";
import icon3 from "./AXELIMG/Axleicons/k4crashrating.png";

const Axel1 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">ROCKER B380</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Welcome to the Doorways to the Convenience</h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-justify">
              The streamlined design seamlessly integrates into various settings
              while offering advanced functionalities. Furthermore, it includes
              close-protection safety measures necessary for handling mixed
              traffic. These barriers are engineered with precise speed control
              and optimization for barrier gate operation.
              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={road1}
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

export default Axel1