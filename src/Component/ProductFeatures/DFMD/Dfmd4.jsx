import React from "react";
import dfmd4 from "./DFMDIMG/DF3310M.png";
import "./Dfmd.css";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import icon1 from "./DFMDIMG/Dfmdicons/2ywarranty.png";
import icon2 from "./DFMDIMG/Dfmdicons/10ywarranty.png";
import icon3 from "./DFMDIMG/Dfmdicons/100percentage.png";

const Dfmd4 = ({ isMobileView }) => {
  return (
    <Container className="py-4">
      <Card className="shadow-lg p-4 border-0 bg-white rounded-4">
        <Card.Body>
          <Row className="text-center">
            <Col>
              <h4 className="fw-bold">DF3310M</h4>
              <h6 className="fw-semibold" style={{ color: "#084D87",fontSize: "1.5rem" }}>Precision Security for High-Stakes Environments</h6>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
            <p className="text-justify">
            The DF3310M Walkthrough Metal Detector delivers unmatched accuracy with its advanced multi-zone detection technology. By triggering simultaneous alarms across multiple zones, it ensures pinpoint precision, making it the ultimate choice for high-security environments where reliability and accuracy are paramount.
              </p>
            </Col>
            <Col md={1}>
            </Col>
            {/* Image */}
            <Col md={3} className="text-center">
              <Image
                src={dfmd4}
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

export default Dfmd4