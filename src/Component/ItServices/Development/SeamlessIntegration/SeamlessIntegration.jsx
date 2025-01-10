import React from 'react'
import Wiper from '../../Development/SeamlessIntegration/SeamlessIntegrationImages/Wiper.png'
import Tool from '../../Development/SeamlessIntegration/SeamlessIntegrationImages/Tool.png'
import Puzzle from '../../Development/SeamlessIntegration/SeamlessIntegrationImages/Puzzle.png'
import Gear from '../../Development/SeamlessIntegration/SeamlessIntegrationImages/Gear.png'
const SeamlessIntegration = () =>{

    return(
        <div>
            <div className="mt-5">
                <div>
                <h3 className="text-center">Unlock the Power of Development and Automation</h3>
                <div className="d-flex p-5 gap-5">
                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Wiper} alt="" />
                       </div>
                       <h6 className="fw-semibold">Customized Solutions</h6>
                       <p style={{ color: "#5F5E5E" }}>Develop tailored applications to fit unique business needs.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Tool} alt="" />
                       </div>
                       <h6 className="fw-semibold">Efficiency Boost</h6>
                       <p style={{ color: "#5F5E5E" }}>Automate repetitive tasks to save time and improve productivity.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Puzzle} alt="" />
                       </div>
                       <h6 className="fw-semibold">Scalability</h6>
                       <p style={{ color: "#5F5E5E" }}>Build solutions that grow with your business seamlessly.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                       <div>
                        <img src={Gear} alt="" />
                       </div>
                       <h6 className="fw-semibold">Cross-Platform Flexibility</h6>
                       <p style={{ color: "#5F5E5E" }}>Develop applications for multiple platforms, ensuring compatibility and wide reach.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SeamlessIntegration