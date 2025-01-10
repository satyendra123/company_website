import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upark from '../MasstransitEsolution/UPARK/Massterangist';
import updated_icon1 from '../SolutionType/iconimajes/updated_icon1.png';
import updated_icon2 from '../SolutionType/iconimajes/updated_icon2.png';
import updated_icon3 from '../SolutionType/iconimajes/updated_icon3.png';
import updated_icon4 from '../SolutionType/iconimajes/updated_icon4.png';
function SolutionType2() {
  const [activeComponent] = useState("U-Park"); // Default is "U-Park"

  return (
    <Container className="my-4">
      <Row className="shadow">
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon1} alt="Enhanced Staff Productivity" />
            <h5 className="ml-5">Secured Revenue 
            Generation</h5>
            <p>
            Implement cashless payments and offer package deals or season passes to streamline transactions, reduce theft, and boost repeat visits.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon2} alt="Mitigated Customer Uncertainty" />
            <h5>Integrated Business
            </h5>
            <p>
            Our integrated model combines discounts, value offers, and event partnerships to drive engagement, while cafeteria tie-ups and coupons enhance convenience and loyalty.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5" src={updated_icon3} alt="Reduced Waiting Times" />
            <h5 >Unauthorized Entry
            Restriction </h5>
            <p>
            Deploy smart access lanes with advanced turnstiles or gates featuring ticket scanning or RFID technology to ensure secure, seamless entry for authorized visitors.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-4">
          <div>
            <img className="ml-5"src={updated_icon4} alt="Elevated Customer Experience" />
            <h5>Remote Management</h5>
            <p>Enable efficient remote assistance with real-time tools for seamless troubleshooting, and monitoring, enhancing reliability and customer satisfaction.
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
