import React from 'react'
import Wiper from '../../Automation/SeamlessIntegration/SeamlessIntegrationImages/Wiper.png'
import Tool from '../../Automation/SeamlessIntegration/SeamlessIntegrationImages/Tools.png'
import Puzzle from '../../Automation/SeamlessIntegration/SeamlessIntegrationImages/Puzzle.png'
import Gear from '../../Automation/SeamlessIntegration/SeamlessIntegrationImages/Gears.png'
const SeamlessIntegration = () =>{

    return(
        <div>
            <div className="">
                <div>
                <h3 className="text-center mt-4">Where Hello Automation Meets Efficiency, Accuracy, and</h3>
                <h3 className="text-center">Scalability to Transform Your Workflow.</h3>
                <div className="d-flex p-5 gap-5">
                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Wiper} alt="" />
                       </div>
                       <h6 className="fw-semibold">Workflow Optimization</h6>
                       <p style={{ color: "#5F5E5E" }}>Automate tasks to streamline processes, reduce manual effort, and save valuable time.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Tool} alt="" />
                       </div>
                       <h6 className="fw-semibold">Scalability</h6>
                       <p style={{ color: "#5F5E5E" }}>Adapt and grow effortlessly with automation solutions designed to scale with your business.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Puzzle} alt="" />
                       </div>
                       <h6 className="fw-semibold">Accuracy</h6>
                       <p style={{ color: "#5F5E5E" }}>Ensure precision and consistency by minimizing errors through automated execution.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Gear} alt="" />
                       </div>
                       <h6 className="fw-semibold">Real-Time Monitoring</h6>
                       <p style={{ color: "#5F5E5E" }}>Gain instant insights to monitor and adjust workflows for seamless operations.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SeamlessIntegration