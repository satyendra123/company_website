import React from 'react';
import customsoftware from './SoftwareSolutionImages/customsoftware.png';
import apidevelopment from './SoftwareSolutionImages/apidevelopment.png';
import systemintegration from './SoftwareSolutionImages/systemintegration.png';
import middleware from './SoftwareSolutionImages/middleware.png';
import './SoftwareSolution.css';

const SoftwareSolution = () => {
    return (
        <div className="mt-3">
            <div>
                <h3 className="text-center">
                Cloud and infrastructure services
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
                            <h3>Cloud Services Deployment</h3>
                            <div className="d-flex flex-column gap-1">
                            <p>Streamline your transition to the cloud with minimal disruption to daily operations.</p>
                            <p>Choose the right model: public, private, or hybrid cloud solutions tailored to your needs.</p>
                            <p>Enhance efficiency with scalable resources and real-time performance monitoring.</p>
                            </div>
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
                            <h3>IT Infrastructure Services</h3>
                            <p>
                            Build and maintain secure, high-speed networks for seamless communication.
Ensure optimal performance of IT servers through proactive management.
Integrate hardware and software systems to enhance operational efficiency.
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


                {/* system integration Development   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">
                    <div className="image-container">
                        <img src={systemintegration} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Disaster Recovery & Backup</h3>
                            <p>
                            Automate data backups to safeguard critical business information.
Implement tailored disaster recovery plans to ensure minimal downtime.
Rapidly recover systems and data for uninterrupted business continuity.
                            </p>
                            <h3 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h3>
                        </div>
                    </div>
                </div>


                {/*middleware integration   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">

                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>DevOps Services</h3>
                            <p>
                            Automate testing and deployments with CI/CD pipelines for faster delivery.
Manage infrastructure using IaC tools for consistent and repeatable setups.
Optimize system performance with continuous monitoring and adjustments.
                            </p>
                            <h3 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h3>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src={middleware} alt="Custom Software" className="img-fluid" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SoftwareSolution;
