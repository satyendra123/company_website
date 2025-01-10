import React from 'react'
import Wiper from '../../Softwaredevelopment/SeamlessIntegration/SeamlessIntegrationImages/Wiper.png'
import Tool from '../../Softwaredevelopment/SeamlessIntegration/SeamlessIntegrationImages/Tools.png'
import Puzzle from '../../Softwaredevelopment/SeamlessIntegration/SeamlessIntegrationImages/Puzzle.png'
import Gear from '../../Softwaredevelopment/SeamlessIntegration/SeamlessIntegrationImages/Gears.png'
const SeamlessIntegration = () =>{

    return(
        <div>
            <div className="mt-5">
                <div>
                <h3 className="text-center">Transform Software Development</h3>
                <h3 className="text-center"> with Seamless Integration.</h3>
                <div className="d-flex p-5 gap-5">
                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Wiper} alt="" />
                       </div>
                       <h6 className="fw-semibold">Custom Software Development</h6>
                       <p style={{ color: "#5F5E5E" }}>Build tailored solutions to streamline your operations and meet your business goals.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Tool} alt="" />
                       </div>
                       <h6 className="fw-semibold">API Development</h6>
                       <p style={{ color: "#5F5E5E" }}>Enable smooth communication across systems with secure and scalable APIs.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Puzzle} alt="" />
                       </div>
                       <h6 className="fw-semibold">System Integration</h6>
                       <p style={{ color: "#5F5E5E" }}>Connect and unify your IT ecosystem for optimal performance.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Gear} alt="" />
                       </div>
                       <h6 className="fw-semibold">Middleware Solutions</h6>
                       <p style={{ color: "#5F5E5E" }}>Bridge the gap between applications with efficient middleware technology.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SeamlessIntegration