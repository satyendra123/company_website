import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apark from '../IotEsolution/APARK/IotEsolution';
import updated_icon1 from '../SolutionType/Solutionproductupdatedicon/updated_icon1.png';
import updated_icon2 from '../SolutionType/Solutionproductupdatedicon/updated_icon2.png';
import updated_icon3 from '../SolutionType/Solutionproductupdatedicon/updated_icon3.png';
import updated_icon4 from '../SolutionType/Solutionproductupdatedicon/updated_icon4.png';
function SolutionType2() {
  const [activeComponent] = useState("U-Park"); // Default is "U-Park"

  return (
    <Container className="my-4">
      <Row className="shadow">
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon1} alt="Enhanced Staff Productivity" />
            <h5 className="ml-5">Custom Roles</h5>
            <p>
            Simplified tools for visitors, hosts, and security teams to streamline approvals and registrations.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon2} alt="Mitigated Customer Uncertainty" />
            <h5>Quick Check-ins</h5>
            <p>
            Fast-track frequent visitors with recurring visit features, saving time and effort.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon3} alt="Reduced Waiting Times" />
            <h5 >Easy Bulk Invites</h5>
            <p>
            Fast-track frequent visitors with recurring visit features, saving time and effort.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5"src={updated_icon4} alt="Elevated Customer Experience" />
            <h5>Layered Security</h5>
            <p>Multi-level approvals for hosts, security, and meetings, ensuring safety with ease.
            </p>
          </div>
        </Col>
      </Row>

      {/* Render the active component here */}
      <Row className="mt-4">
        <Col>
          <Apark />
        </Col>
      </Row>
    </Container>
  );
}

export default SolutionType2;
