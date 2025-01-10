import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SolutionContext } from '../../../../Context/PGSContext/Context';
import { ProductContext } from '../../../../Context/PGSContext/ProContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upark from '../PgsEsolution/UPARK/PgsEsolution';
import Vpark from '../PgsEsolution/VPARK/PgsEsolution';
import Wpark from '../PgsEsolution/WPARK/PgsEsolution';

function SolutionType2() {
  const [isClicked, setIsClicked] = useState(false);
  const [activeComponent, setActiveComponent] = useState("U-Park");
  const { updateBannerImage } = useContext(SolutionContext);
  const { updateSelectedCategory } = useContext(ProductContext);

  const handleComponentChange = (type) => {
    setIsClicked(true); // Set the clicked state
    setActiveComponent(type);
    updateBannerImage(type);
    updateSelectedCategory(type);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "U-Park":
        return <Upark />;
      case "V-Park":
        return <Vpark />;
      case "W-Park":
        return <Wpark />;
      default:
        return <Upark />;
    }
  };

  return (
    <Container className="my-4">
      <Row className="gx-4 mb-4">
        <Col xs={12} md={5} className="d-flex align-items-stretch mb-4 mb-md-0">
          <Card
            className="shadow"
            style={{
              minHeight: '324px',
              cursor: 'pointer',
              backgroundColor: isClicked && activeComponent === "U-Park" ? "#f0f8ff" : "white"
            }}
            onClick={() => handleComponentChange("U-Park")}
          >
            <Card.Body>
              <Card.Title className="fw-bold text-center mt-5">U-Park</Card.Title>
              <Card.Text className="m-auto p-5">
                A combi-sensor based parking guidance system uses ultrasonic sensors and LED indicators to provide real-time parking availability, enhance user experience, and minimize energy consumption.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={7}>
          <Row className="gx-4 mb-4">
            <Col xs={12}>
              <Card
                className="border shadow"
                style={{
                  minHeight: '150px',
                  cursor: 'pointer',
                  backgroundColor: isClicked && activeComponent === "V-Park" ? "#f0f8ff" : "white"
                }}
                onClick={() => handleComponentChange("V-Park")}
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

          <Row className="gx-4 gy-4">
            <Col xs={12}>
              <Card
                className="shadow"
                style={{
                  minHeight: '150px',
                  cursor: 'pointer',
                  backgroundColor: isClicked && activeComponent === "W-Park" ? "#f0f8ff" : "white"
                }}
                onClick={() => handleComponentChange("W-Park")}
              >
                <Card.Body>
                  <Card.Title className="fw-bold text-center p-3">W-Park</Card.Title>
                  <Card.Text className="m-auto pl-5 pr-5">
                    W-Park is a ground sensor-based system ensuring a seamless parking experience by displaying real-time slot availability on digital displays, saving time and reducing stress.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12}>{renderActiveComponent()}</Col>
      </Row>
    </Container>
  );
}

export default SolutionType2;
