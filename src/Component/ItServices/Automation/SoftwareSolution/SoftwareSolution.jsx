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
                Transform raw data into actionable insights and drive intelligent decisions
                </h3>
                <p className="text-center font-semibold">
                Harness the full potential of your data to optimize operations, predict trends, and fuel innovation.
                </p>

                {/* Custom Software Development   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">
                    <div className="image-container">
                        <img src={customsoftware} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Industrial Automation</h3>
                            <div className="d-flex flex-column gap-1">
                            <p>Design custom automation systems to improve process efficiency and reduce manual labor.</p>
                            <p>Design custom automation systems to improve process efficiency and reduce manual labor.</p>
                            <p>Continuously monitor and maintain systems to ensure smooth operation and minimize downtime.</p>
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
                            <h3>Home Automation</h3>
                            <div className="d-flex flex-column gap-1">
                            <p>Install and set up smart devices like lighting, thermostats, and security systems for remote control.</p>
                            <p>Integrate all devices into a cohesive system for seamless operation.</p>
                            <p>Customize settings to enhance convenience, energy efficiency, and security based on user preferences.</p>
                            </div>
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
                            <h3>Building Automation</h3>
                            <div className="d-flex flex-column gap-1">
                            <p>Integrate systems like HVAC, lighting, and security into a centralized platform for easy management.</p>
                            <p>Optimize energy use by adjusting systems based on occupancy and external factors.</p>
                            <p>Provide real-time monitoring and alerts for efficient maintenance and system performance.</p>    
                            </div>
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
                            <h3>Energy Management</h3>
                            <div className="d-flex flex-column gap-1">
                            <p>Assess energy usage to identify inefficiencies and areas for improvement.</p>
                            <p>Implement energy-saving solutions like efficient lighting and HVAC systems.</p>
                            <p>Monitor energy consumption and provide data-driven insights to optimize usage and reduce costs.</p>                        
                            </div>
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
