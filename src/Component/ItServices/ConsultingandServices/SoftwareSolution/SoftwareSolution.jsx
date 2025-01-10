import React from 'react';
import customsoftware from './SoftwareSolutionImages/customsoftware.png';
import apidevelopment from './SoftwareSolutionImages/apidevelopment.png';
import './SoftwareSolution.css';

const SoftwareSolution = () => {
    return (
        <div className="mt-3">
            <div>
                <h3 className="text-center">
                    Unlock Growth with Insightful Consulting & Smart Strategies
                </h3>
                <h6 className="text-center">
                    Delivering powerful and flexible IT solutions tailored to your business need
                </h6>

                {/* Custom Software Development   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">
                    <div className="image-container">
                        <img src={customsoftware} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>IT Consulting</h3>
                            <p>
                                Expert advice to bridge the gap between technology and your business needs.
                                Evaluate and improve your current systems for better efficiency and scalability.
                                Guidance on adopting cutting-edge solutions like AI, cloud, and IoT.
                            </p>
                            <h3 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h3>
                        </div>
                    </div>
                </div>

                {/*Api integration   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">

                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>CRM Solution</h3>
                            <p>
                                Centralize customer data to improve communication and support.
                                Automate workflows for lead tracking, nurturing, and campaign management.
                                Integrate CRMs like Salesforce, HubSpot, or Zoho to match business needs.
                            </p>
                            <h3 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h3>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src={apidevelopment} alt="Custom Software" className="img-fluid" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SoftwareSolution;
