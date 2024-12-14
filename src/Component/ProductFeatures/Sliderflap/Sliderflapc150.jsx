import React from "react";
import Turner150 from "./SliderflapIMG/SUTORH180.png";
import "./Sliderflapc100.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./SliderflapIMG/Sliderflapicons/2ywarranty.png";
import icon2 from "./SliderflapIMG/Sliderflapicons/6ywarranty.png";
import icon3 from "./SliderflapIMG/Sliderflapicons/85percentage.png";

const Sliderflapc150 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold text-uppercase">flaptile sl1280</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Sophistication in Security and Seamless Integration

              </h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            Engineered for superior pedestrian control, the SlideTile SL 1310 offers versatile access management with multiple control options. This high-security barrier guarantees a smooth, secure, and stylish passage, tailored to meet the demands of modern environments.


              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-justify">
              <Image
                src={Turner150}
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
    Atomatic Version
</span>
  </div>
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Sliderflapc150