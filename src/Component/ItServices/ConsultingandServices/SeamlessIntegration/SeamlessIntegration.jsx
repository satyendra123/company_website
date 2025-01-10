import React from 'react'
import Wiper from '../../ConsultingandServices/SeamlessIntegration/SeamlessIntegrationImages/Wiper.png'
import Tool from '../../ConsultingandServices/SeamlessIntegration/SeamlessIntegrationImages/Tool.png'
import Puzzle from '../../ConsultingandServices/SeamlessIntegration/SeamlessIntegrationImages/Puzzle.png'
import Gear from '../../ConsultingandServices/SeamlessIntegration/SeamlessIntegrationImages/Gear.png'
const SeamlessIntegration = () =>{

    return(
        <div>
            <div className="mt-5">
                <div>
                <h3 className="text-center">Strategic Solutions to Transform Your Business</h3>
                <div className="d-flex p-5 gap-5">
                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Wiper} alt="" />
                       </div>
                       <h6 className="fw-semibold">Strategic Roadmapping</h6>
                       <p style={{ color: "#5F5E5E" }}>Plan and execute clear strategies that align with your business goals.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Tool} alt="" />
                       </div>
                       <h6 className="fw-semibold">Tailored Solutions</h6>
                       <p style={{ color: "#5F5E5E" }}>Customized consulting and CRM solutions to meet specific business challenges.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Puzzle} alt="" />
                       </div>
                       <h6 className="fw-semibold">Improved Efficiency</h6>
                       <p style={{ color: "#5F5E5E" }}>Optimize workflows and operations to enhance productivity and growth.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Gear} alt="" />
                       </div>
                       <h6 className="fw-semibold">Data-Driven Insights</h6>
                       <p style={{ color: "#5F5E5E" }}>Leverage data and analytics to drive smarter decision-making.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SeamlessIntegration