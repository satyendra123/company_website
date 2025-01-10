import React from 'react';
import customsoftware from './SoftwareSolutionImages/customsoftware.png';
import apidevelopment from './SoftwareSolutionImages/apidevelopment.png';
import systemintegration from './SoftwareSolutionImages/systemintegration.png';
import middleware from './SoftwareSolutionImages/middleware.png';
import iot from './SoftwareSolutionImages/iot.png';
import microcontroller from './SoftwareSolutionImages/microcontroller.png';
import firmware from './SoftwareSolutionImages/firmware.png';

import './SoftwareSolution.css';

const SoftwareSolution = () => {
    return (
        <div className="mt-3">
            <div>
                <h3 className="text-center">
                    Shaping the Future with Development & Automation
                </h3>
                <h6 className="text-center">
                    Innovative development and automation solutions designed to streamline processes and drive business growth.
                </h6>

                {/* Custom Software Development   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">
                    <div className="image-container">
                        <img src={customsoftware} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Android Development</h3>
                            <p>
                                Build intuitive, user-friendly apps optimized for the Android ecosystem.
                                Ensure seamless performance across diverse devices with robust testing.
                                Integrate advanced features like push notifications, offline support, and third-party APIs.
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
                            <h3>Web Development</h3>
                            <p>
                                Create responsive, high-performance websites with dynamic designs.
                                Develop scalable web applications tailored to business needs.
                                Focus on SEO and accessibility to ensure broad audience reach.
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
                            <h3>E-commerce Development</h3>
                            <p>
                                Build secure and scalable e-commerce platforms for online stores.
                                Integrate payment gateways, inventory management, and user-friendly interfaces.
                                Customize storefront designs to align with your brand identity.
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
                            <h3>No-Code Platform Development</h3>
                            <p>
                                Quickly create functional apps without the need for coding expertise.
                                Empower teams to automate processes and streamline workflows.
                                Utilize drag-and-drop tools for rapid development and deployment.
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


                {/* IoT Development integration*/}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">
                    <div className="image-container">
                        <img src={iot} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>IoT Development</h3>
                            <p>
                                Build smart solutions for connected devices to automate everyday processes.
                                Enable real-time monitoring and control of IoT devices for various industries.
                                Enhance systems with IoT protocols like MQTT and CoAP for seamless communication.
                            </p>
                            <h3 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h3>
                        </div>
                    </div>
                </div>

                {/*Microcontroller Programmingintegration   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">

                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Microcontroller Programming</h3>
                            <p>
                                Develop firmware for microcontrollers to power embedded systems.
                                Optimize device functionality with low-level programming.
                                Enable communication with hardware components for IoT and automation projects.
                            </p>
                            <h3 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h3>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src={microcontroller} alt="Custom Software" className="img-fluid" />
                    </div>
                </div>


                {/* Frmware Development integration*/}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5">
                    <div className="image-container">
                        <img src={firmware} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container">
                        <div className="d-flex flex-column gap-3 justify-content-end p-4">
                            <h3>Firmware Development</h3>
                            <p>
                                Write low-level code for devices to ensure smooth hardware-software interaction.
                                Provide updates and bug fixes for secure and efficient firmware performance.
                                Develop firmware for various devices, including sensors, controllers, and wearables.
                            </p>
                            <h3 className="" style={{ color: '#058AFB' }}>
                                Contact us
                            </h3>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default SoftwareSolution;
