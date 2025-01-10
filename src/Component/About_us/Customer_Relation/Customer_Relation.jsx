import React from 'react';
import Trophy from '../../About_us/Customer_Relation/Customer_Relation_Images/Trophy.png';
import Natural_food from '../../About_us/Customer_Relation/Customer_Relation_Images/Natural Food.png';
import Two_Hand from '../../About_us/Customer_Relation/Customer_Relation_Images/Two Hands.png';
import './Customer_Relation.css'; // Import external CSS file

const Who_We = () => {
  return (
    <div className="Customer-relation-wrapper">
      <div className="Customer-relation-container">

        <div className="Customer-relation-item">
          <div>
            <img src={Trophy} alt="Trophy" />
          </div>
          <h1>Excellence <br /> Uncompromised</h1>
          <p>We exceed industry standards. Reliability and performance are our promises.</p>
        </div>

        <div className="Customer-relation-item">
          <div>
            <img src={Natural_food} alt="Natural Food" />
          </div>
          <h1>Excellence <br /> Uncompromised</h1>
          <p>We exceed industry standards. Reliability and performance are our promises.</p>
        </div>
        
        <div className="Customer-relation-item">
          <div>
            <img src={Two_Hand} alt="Two Hands" />
          </div>
          <h1>Excellence <br /> Uncompromised</h1>
          <p>We exceed industry standards. Reliability and performance are our promises.</p>
        </div>
      </div>
    </div>
  );
};

export default Who_We;
