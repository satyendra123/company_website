import React,{ useState, useEffect } from 'react';
import globeimage from './TechnologyStackImages/globeimage.png';

const TechnologyStack = () => {
            const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
        
            // Update isMobile on window resize
            useEffect(() => {
                const handleResize = () => setIsMobile(window.innerWidth < 768);
                window.addEventListener("resize", handleResize);
        
                // Cleanup the event listener
                return () => window.removeEventListener("resize", handleResize);
            }, []);
        
            const containerStyle = {
                marginTop: isMobile ? "500px" : "0px", // Dynamically adjust marginTop
            };

    return (
        <div className="container-fluid mt-5" style={containerStyle}>
            <div className="row p-5">
                {/* First Column - Image */}
                <div className="col-6 d-flex flex-column justify-content-end align-items-center">
                    <img src={globeimage} alt="globe image" style={{ width: "50%", height: "auto" }} />
                </div>

                {/* Second Column - Content */}
                <div className={`col-12 col-md-6 d-flex flex-column justify-content-center align-items-center ${isMobile ? "mt-4" : ""}`}>
                    <div>
                        <h4 style={{ color: "#0A365C" }}>Our Technology Stack</h4>
                        <h3>Tech stacks</h3>
                        <h3>We Use</h3>
                        <p style={{ maxWidth: "300px" }}>
                            At the heart of our innovative solutions lies a robust, cutting-edge technology stack 
                            that drives efficiency, reliability, and scalability. Each tool we use is carefully 
                            selected to meet the unique demands of modern businesses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyStack;
