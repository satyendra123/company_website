import React from "react";
import turnerc250 from "./Tripodimg/Turnerc250.png";
import "./Turnerc100.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./Tripodimg/Tripodoneicons/2ywarranty.png";
import icon2 from "./Tripodimg/Tripodoneicons/10ywarranty.png";
import icon3 from "./Tripodimg/Tripodoneicons/Automatic.png";

const Turnerc250 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">TURNER C250</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Enhanced Accessibility for Modern Environments

              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            Discover unparalleled user convenience with the Turner c250, featuring transparent tempered glass panels and an intuitive color-changing indicator for clear visual guidance. Designed to work seamlessly alongside swing gates, it ensures smooth access for larger items, including wheelchairs, bicycles, and strollers, while maintaining top-tier security.</p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={turnerc250}
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

export default Turnerc250



