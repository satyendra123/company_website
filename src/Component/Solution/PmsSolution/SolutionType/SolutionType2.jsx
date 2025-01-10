import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apark from '../PmsEsolution/APARK/PmsEsolution';
import Fpark from '../PmsEsolution/FPARK/PmsEsolution';
import Mpark from '../PmsEsolution/MPARK/PmsEsolution';
import Architecture from '../Architecture/Architecture';
import { SolutionContext } from '../../../../Context/PMSContext/Context';
import { ProductContext } from '../../../../Context/PMSContext/ProContext';

function SolutionType2() {
  const [activeComponent, setActiveComponent] = useState("A-Park");
  const [selectedType, setSelectedType] = useState("A");
  const [isClicked, setIsClicked] = useState(false);
  const { updateBannerImage } = useContext(SolutionContext);
  const { updateSelectedCategory } = useContext(ProductContext);

  const handleComponentChange = (type, selected) => {
    setIsClicked(true); // Set the clicked state
    setActiveComponent(type);
    setSelectedType(selected);
    updateBannerImage(type);
    updateSelectedCategory(type);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "A-Park":
        return <Apark />;
      case "F-Park":
        return <Fpark />;
      case "M-Park":
        return <Mpark />;
      default:
        return <Apark />;
    }
  };

  return (
    <Container className="my-4">
      <Row className="gx-4 mb-4">
        <Col xs={12} md={5} className="d-flex align-items-stretch mb-4 mb-md-0">
          <Card
            className="shadow"
            style={{ minHeight: '324px', cursor: 'pointer', backgroundColor: isClicked && activeComponent === "A-Park" ? "#f0f8ff" : "white"}}
            onClick={() => handleComponentChange("A-Park", "A")}
          >
            <Card.Body>
              <Card.Title className="fw-bold text-center mt-5">A-Park</Card.Title>
              <Card.Text className="m-auto p-5">
                A-Park is an integrated system ideal for large parking areas, featuring entry and exit terminals with Manned and Automated Pay Stations for a seamless and convenient user experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={7}>
          <Row className="gx-4 mb-4">
            <Col xs={12}>
              <Card
                className="border shadow"
                style={{ minHeight: '150px', cursor: 'pointer',backgroundColor: isClicked && activeComponent === "F-Park" ? "#f0f8ff" : "white" }}
                onClick={() => handleComponentChange("F-Park", "F")}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center p-3">F-Park</Card.Title>
                  <Card.Text className="m-auto pl-5 pr-5">
                    F-Park is designed for on-street parking in urban areas, featuring flap lock models for improved management, secure revenue, and energy efficiency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="gx-4 gy-4">
            <Col xs={12}>
              <Card
                className="shadow"
                style={{ minHeight: '150px', cursor: 'pointer',backgroundColor: isClicked && activeComponent === "M-Park" ? "#f0f8ff" : "white" }}
                onClick={() => handleComponentChange("M-Park", "M")}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center p-3">M-Park</Card.Title>
                  <Card.Text className="m-auto pl-5 pr-5">
                    M-Park is a versatile parking system tailored to custom needs, offering flexible solutions for both revenue-based and free parking with manned or unmanned options.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          {renderActiveComponent()}
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>
          <Architecture selectedType={selectedType} />
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionType2;
