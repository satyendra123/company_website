import React from 'react'
import Wiper from '../../CloudServices/SeamlessIntegration/SeamlessIntegrationImages/Wiper.png'
import Tool from '../../CloudServices/SeamlessIntegration/SeamlessIntegrationImages/Tools.png'
import Puzzle from '../../CloudServices/SeamlessIntegration/SeamlessIntegrationImages/Puzzle.png'
import Gear from '../../CloudServices/SeamlessIntegration/SeamlessIntegrationImages/Gear.png'

const SeamlessIntegration = () =>{

    return(
        <div>
            <div className="mt-5">
                <div>
                <h3 className="text-center">Where Cloud Technology Meets Business Growth</h3>
                <h3 className="text-center"> Through Security and Scalability.</h3>
                <div className="d-flex p-5 gap-5">
                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Wiper} alt="" />
                       </div>
                       <h6 className="fw-semibold">Reliability & High Uptime</h6>
                       <p style={{ color: "#5F5E5E" }}>Ensure 99.9% uptime with secure and stable infrastructure, keeping your operations running seamlessly.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Tool} alt="" />
                       </div>
                       <h6 className="fw-semibold">Scalable Solutions</h6>
                       <p style={{ color: "#5F5E5E" }}>Flexible, future-ready services that effortlessly scale with your business growth, ensuring long-term success.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Puzzle} alt="" />
                       </div>
                       <h6 className="fw-semibold">Enhanced Security</h6>
                       <p style={{ color: "#5F5E5E" }}>Protect your critical data with advanced encryption, multi-layered security protocols, and adherence to global standards.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Gear} alt="" />
                       </div>
                       <h6 className="fw-semibold">24/7 Monitoring & Support</h6>
                       <p style={{ color: "#5F5E5E" }}>Proactive monitoring and round-the-clock support to swiftly resolve issues and minimize any disruptions to your services.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SeamlessIntegration