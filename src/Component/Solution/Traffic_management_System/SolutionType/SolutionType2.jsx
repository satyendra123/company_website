import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upark from '../TrafficEsolution/UPARK/Traffic';
import updated_icon1 from "./Solutionicon/icon1.png"
import updated_icon2 from "./Solutionicon/icon2.png"
import updated_icon3 from "./Solutionicon/icon3.png"
import updated_icon4 from "./Solutionicon/iocn4.png"
function SolutionType2() {
  const [activeComponent] = useState("U-Park"); // Default is "U-Park"

  return (
    <Container className="my-4">
      <Row className="shadow">
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon1} alt="Enhanced Staff Productivity" />
            <h5 className="ml-1">The Traffic Violation 
            Detection System</h5>
            <p>
            Ensures  24/7 accurate detection, real-time alerts, secure data, advanced search, customizable reports, and admin tools for efficient traffic enforcement.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon2} alt="Mitigated Customer Uncertainty" />
            <h5>AI Vision Technology</h5>
            <p>
            Efficiently analyzes real-time traffic density from camera feeds, dynamically adjusting light durations to optimize flow and simulating the process for clarity.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon3} alt="Reduced Waiting Times" />
            <h5 >Dynamic Traffic Signal 
            Adjustments</h5>
            <p>
            Traffic signals adapt in real-time based on vehicle density, reducing congestion and improving flow.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5"src={updated_icon4} alt="Elevated Customer Experience" />
            <h5>Real-Time Traffic 
            Analysis</h5>
            <p>Integrated cameras and sensors continuously monitor road conditions, providing actionable insights.
            </p>
          </div>
        </Col>
      </Row>

      {/* Render the active component here */}
      <Row className="mt-4">
        <Col>
          <Upark />
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionType2;
