import React from 'react'
import Wiper from '../../Securitysolution/SeamlessIntegration/SeamlessIntegrationImages/Wiper.png'
import Tool from '../../Securitysolution/SeamlessIntegration/SeamlessIntegrationImages/Tool.png'
import Puzzle from '../../Securitysolution/SeamlessIntegration/SeamlessIntegrationImages/Puzzle.png'
import Gear from '../../Securitysolution/SeamlessIntegration/SeamlessIntegrationImages/Gear.png'
const SeamlessIntegration = () =>{

    return(
        <div>
            <div className="mt-5">
                <div>
                <h3 className="text-center">Enhancing trust and protection with cutting-edge</h3>
                <h3 className="text-center">technology for secure access and data integrity</h3>
                <div className="d-flex p-5 gap-5">
                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Wiper} alt="" />
                       </div>
                       <h6 className="fw-semibold">Unmatched Precision</h6>
                       <p style={{ color: "#5F5E5E" }}>Ensure accurate identity verification with advanced biometric technologies.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Tool} alt="" />
                       </div>
                       <h6 className="fw-semibold">Enhanced Security</h6>
                       <p style={{ color: "#5F5E5E" }}>Prevent unauthorized access with foolproof, tamper-resistant solutions.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Puzzle} alt="" />
                       </div>
                       <h6 className="fw-semibold">Seamless Integration</h6>
                       <p style={{ color: "#5F5E5E" }}>Easily integrate biometric systems with existing IT infrastructure.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Gear} alt="" />
                       </div>
                       <h6 className="fw-semibold">User-Friendly Experience</h6>
                       <p style={{ color: "#5F5E5E" }}>Provide a smooth, contactless, and efficient user authentication process.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SeamlessIntegration