import React from "react";
import shutterh180 from "./ShutdoormotorIMG/Shutterh180.png";
import "./Shut.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./ShutdoormotorIMG/Shutdooricons/2ywarranty.png";
import icon2 from "./ShutdoormotorIMG/Shutdooricons/Esunkitwarranty.png";
import icon3 from "./ShutdoormotorIMG/Shutdooricons/100percentage.png";

const Shutdoor2 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">SHUTTER H180</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Versatile Automation for Shutter Systems
              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            The SHUTTER H180 is meticulously crafted to meet diverse shutter automation needs, from light-duty residential requirements to heavy-duty industrial applications. With its robust design and advanced functionality, this system ensures smooth and reliable operation across various settings.

              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={shutterh180}
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

export default Shutdoor2