import React from 'react';
import customsoftware from './SoftwareSolutionImages/customsoftware.png';
import './SoftwareSolution.css';

const SoftwareSolution = () => {
    return (
        <div className="">
            <div>
                <h3 className="text-center">
                Protecting what matters most with technology that recognizes you
                </h3>
                <h6 className="text-center">
                Delivering powerful and flexible IT solutions tailored to your business need
                </h6>

                {/* Custom Software Development   */}
                <div className="d-flex justify-content-center align-items-center gap-5 p-5"  style={{marginTop:"-80px"}}>
                    <div className="image-container">
                        <img src={customsoftware} alt="Custom Software" className="img-fluid" />
                    </div>
                    <div className="content-container" style={{marginTop:"150px"}}>
                        <div className="d-flex flex-column gap-3 justify-content-center align-items-center p-4">
                            <h3 className="">Biometric Security Solutions</h3>
                            <p>
                            Ensure secure and accurate identity verification with advanced biometric technologies like fingerprint, facial, and iris recognition.
                            Provide touchless and hygienic authentication for workplaces, healthcare, and high-security environments.
                            Seamlessly integrate biometric solutions into existing systems for enhanced functionality and protection.
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
