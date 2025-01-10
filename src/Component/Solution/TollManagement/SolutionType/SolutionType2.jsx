import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vpark from '../TollEsolution/VPARK/TollEsolution';
import updated_icon1 from '../TOLLSOLUTIONIMG/tollimg/tollicon1.png';
import updated_icon2 from '../TOLLSOLUTIONIMG/tollimg/tollicon2.png';
import updated_icon3 from '../TOLLSOLUTIONIMG/tollimg/tollicon3.png';
import updated_icon4 from '../TOLLSOLUTIONIMG/tollimg/tollicon4.png';
function SolutionType2() {
  const [activeComponent] = useState("U-Park"); // Default is "U-Park"

  return (
    <Container className="my-4">
      <Row className="shadow">
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5 " src={updated_icon1} alt="Enhanced Staff Productivity" />
            <h5 className="ml-1 mt-3">Highway Monitoring</h5>
            <p>
            Ensures smooth traffic flow, accurate toll collection, and real-time detection of congestion.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon2} alt="Mitigated Customer Uncertainty" />
            <h5>Web Based Application</h5>
            <p>
            Utilize cloud platforms to enable seamless toll collection, real-time transaction monitoring, and centralized data management. 
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon3} alt="Reduced Waiting Times" />
            <h5 >The Central Integrated 
            Model</h5>
            <p>
            Consolidates toll operations across multiple locations into a unified control center. It ensures data synchronization and centralized reporting.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5"src={updated_icon4} alt="Elevated Customer Experience" />
            <h5>Automatic Toll Collection</h5>
            <p>Supports RFID, ANPR, or Fastag-based automated toll deduction.
            </p>
          </div>
        </Col>
      </Row>

      {/* Render the active component here */}
      <Row className="mt-4">
        <Col>
          <Vpark />
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionType2;
