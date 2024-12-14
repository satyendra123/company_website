import React from "react";
import rollerh200 from "./ShutdoormotorIMG/Rollerh200.png";
import "./Shut.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./ShutdoormotorIMG/Shutdooricons/2ywarranty.png";
import icon2 from "./ShutdoormotorIMG/Shutdooricons/Esunkitwarranty.png";
import icon3 from "./ShutdoormotorIMG/Shutdooricons/85percentage.png";

const Shutdoor1 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">ROLOR H200</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Precision and Power in Gate Automation
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            Optimize your automation experience with the ROLOR H200, a compact and powerful drive system engineered for seamless functionality. With integrated safety brakes, this innovative solution prioritizes reliability and peace of mind, making it ideal for residential and commercial applications.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={rollerh200}
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
    <span className="text-center" style={{ fontSize: "8.5px" }}>E-Sun Kit</span>
  </div>
  <div className="d-flex flex-column align-items-center">
    <Image src={icon3} alt="Icon 3" className="mb-1" />
    <span className="text-center" style={{ fontSize: "8.5px" }}>
    Duty Cycle
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Shutdoor1