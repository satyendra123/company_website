import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upark from '../PgsEsolution/UPARK/PgsEsolution';
import Vpark from '../PgsEsolution/VPARK/PgsEsolution';
import Wpark from '../PgsEsolution/WPARK/PgsEsolution';

function SolutionType2() {
  const [activeComponent, setActiveComponent] = useState("A-Park"); // Default is "A-Park"

  // Function to render the content based on the activeComponent state
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "U-Park":
        console.log("U-Park is clicked")
        return <Upark />;
        break;
      case "V-Park":
        console.log("V-Park is clicked")
        return <Vpark />;
        break;
      case "W-Park":
        console.log("W-Park is clicked")
        return <Wpark />;
        break;
      default:
        return <Upark />; // In case of unexpected state
    }
  };

  return (
    <Container className="my-4">
      <Row className="gx-4 mb-4">
        <Col md={5} className="d-flex align-items-stretch">
          <Card
            className="shadow"
            style={{ height: '324px', cursor: 'pointer' }}
            onClick={() => setActiveComponent("U-Park")}
          >
            <Card.Body>
              <Card.Title className="fw-bold text-center mt-5">U-Park</Card.Title>
              <Card.Text className="m-auto p-5">
              A combi-sensor based parking guidance system uses ultrasonic sensors and LED indicators to provide real-time parking availability, enhance user experience, and minimize energy consumption.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Row className="gx-4 mb-4">
            <Col md={12}>
              <Card
                className="border shadow"
                style={{ height: '150px', cursor: 'pointer' }}
                onClick={() => setActiveComponent("V-Park")}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center p-3">V-Park</Card.Title>
                  <Card.Text className="m-auto pl-5 pr-5">
                  V-Park enhances traditional parking systems with a camera-based guidance system featuring advanced video analytics and ANPR for superior management.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Second Nested Row */}
          <Row className="gx-4 gy-4">
            <Col md={12}>
              <Card
                className="shadow"
                style={{ height: '150px', cursor: 'pointer' }}
                onClick={() => setActiveComponent("W-Park")}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center p-3">W-Park</Card.Title>
                  <Card.Text className="m-auto pl-5 pr-5">
                  W-Park is ground sensor-based system ensures a seamless parking experience by displaying real-time slot availability on digital displays, saving time and reducing stress.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Render the active component here */}
      <Row className="mt-4">
        <Col>
          {renderActiveComponent()}
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionType2;
