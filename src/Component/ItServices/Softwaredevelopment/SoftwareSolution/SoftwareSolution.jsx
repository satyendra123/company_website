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
                    Unlock the Potential of Seamless Software Solutions
                </h3>
                <h6 className="text-center">
                    Delivering powerful and flexible IT solutions tailored to your business needs
                </h6>

                {/* Custom Software Development   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">
                    <div className="image-container">
                        <img src={customsoftware} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Custom Software Development</h3>
                            <p>
                                Analyze your business requirements to design tailored software solutions.
                                Create robust, scalable, and secure software to streamline operations.
                                Ensure user-friendly interfaces for enhanced usability.
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
                            <h3>API Development</h3>
                            <p>
                            Design and develop scalable, secure APIs for smooth system communication.
                            Optimize data sharing across multiple platforms and applications.
                            Offer reliable support for API integration and lifecycle management.
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
                            <h3>System Integration</h3>
                            <p>
                                AIntegrate diverse systems for seamless communication and efficiency.
                                Migrate data and processes with minimal downtime and maximum precision.
                                Ensure interoperability of software and hardware platforms.
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
                            <h3>Middleware Solutions</h3>
                            <p>
                            Develop middleware to connect applications and bridge communication gaps.
                            Enhance system performance by enabling data exchange in real time.
                            Secure and optimize workflows for complex IT architectures.
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
