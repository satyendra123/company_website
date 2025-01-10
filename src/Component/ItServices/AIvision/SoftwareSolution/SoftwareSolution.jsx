import React from 'react';
import customsoftware from './SoftwareSolutionImages/customsoftware.png';
import apidevelopment from './SoftwareSolutionImages/apidevelopment.png';
import systemintegration from './SoftwareSolutionImages/systemintegration.png';
import middleware from './SoftwareSolutionImages/middleware.png';
import transport from './SoftwareSolutionImages/transport.png';
import './SoftwareSolution.css';

const SoftwareSolution = () => {
    return (
        <div>
            <div>
                <h3 className="text-center">
                Shaping the Future with Development & Automation
                </h3>
                <p className="text-center">
                Innovative development and automation solutions designed to streamline processes and drive business growth.
                </p>

                {/* Custom Software Development   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">
                    <div className="image-container">
                        <img src={customsoftware} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Security & Surveillance</h3>
                            <p>
                            Leverage AI for real-time monitoring, access control, and advanced threat detection.
                            Utilize tools like ANPR and Facial Recognition for seamless security operations.
                            Ensure safer environments with AI-driven security management solutions.
                            </p>
                            <h5 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h5>
                        </div>
                    </div>
                </div>

                {/*Api integration   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">

                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Human Motion & Monitoring</h3>
                            <p>
                            Gain actionable insights into human behavior and activity patterns.
                            Optimize event management, footfall analysis, and attendance tracking.
                            Enhance visitor experience with AI-powered face recognition systems.
                            </p>
                            <h5 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h5>
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
                            <h3>Navigation & Accessibility</h3>
                            <p>
                            Enable seamless indoor navigation and real-time guidance for users.
                            Improve accessibility with AI-driven speech detection features.
                            Empower users with interactive and accurate location-based solutions.
                            </p>
                            <h5 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h5>
                        </div>
                    </div>
                </div>


                {/*middleware integration   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">

                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Industrial & Home Automation</h3>
                            <p>
                            Automate industrial processes to increase efficiency and reduce manual efforts.
                            Monitor and control home systems for smarter living and energy efficiency.
                            Enhance operations with AI-driven insights for automation systems.
                            </p>
                            <h5 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h5>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src={middleware} alt="Custom Software" className="img-fluid" />
                    </div>
                </div>

                 {/* Custom Software Development   */}
                 <div className="d-flex justify-content-center align-items-center gap-5 p-5">
                    <div className="image-container">
                        <img src={transport} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Transport & Image Analysis</h3>
                            <p>
                            Enhance transportation systems with number plate recognition and real-time tracking.
                            Use image comparison to detect patterns and streamline visual data processing.
                            Optimize transport management and image verification tasks effortlessly.
                            </p>
                            <h5 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h5>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default SoftwareSolution;
