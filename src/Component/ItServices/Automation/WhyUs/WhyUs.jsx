import React from 'react';
import conflict from './WhyUsImages/Conflict.png';
import puzzle from './WhyUsImages/Puzzle.png';
import Brain from './WhyUsImages/Brain.png';
import Shield from './WhyUsImages/Shield.png';
import Rowline from './WhyUsImages/Rowline.png';
import Colline from './WhyUsImages/Colline.png';

const WhyUs = () => {
    return (
        <div className="Why-Us Container p-4 mt-3" style={{maxHeight: "500px"}}>
            <div className="row p-5" style={{marginBottom: '0', minHeight: 'auto'}}>
                {/* First Column - Content */}
                <div className="col-6 d-flex flex-column">
                    <div>
                        <h4 style={{ color: "#0A365C" }}>Why Us</h4>
                        <h1>Why HOUSYS</h1>
                        <h1>Stands out</h1>
                    </div>
                    <div>
                        <p style={{ maxWidth: "300px" }}>
                        Discover what makes us the preferred choice for IT solutions and integrations. With us, it’s more than just technology—it’s about results that drive your success.
                        </p>
                    </div>
                    <div>
                        <h3>Talk to our experts</h3>
                    </div>
                </div>

                {/* Second Column - Image divided into two columns */}
                <div className="col-6">
                    <div className="row">
                        {/* First Inner Column */}
                        <div className="col-5 mt-5">
                            <div>
                                <div>
                                    <img src={conflict} alt="Conflict Icon" className="img-fluid" />
                                </div>
                                <h6 className="m-0">Powerful Technologies</h6>
                                <p className="m-0">Stay ahead with next-gen tools and tech stacks designed to optimize your operations.</p>
                            </div>

                            <div>
                                <img src={Rowline} alt="" className="img-fluid" />
                            </div>

                            <div className="mt-3">
                                <div>
                                    <img src={puzzle} alt="Puzzle Icon" className="img-fluid" />
                                </div>
                                <h6>Custom-Crafted Solutions</h6>
                                <p>We don’t believe in one-size-fits-all. Every service we deliver is tailored to your unique goals.</p>
                            </div>
                        </div>

                        <div className="col-1">
                            <img src={Colline} alt="" className="img-fluid" style={{ height: "50%" }} />
                        </div>

                        {/* Second Inner Column */}
                        <div className="col-5">
                            <div>
                                <div>
                                    <img src={Brain} alt="Conflict Icon" className="img-fluid" />
                                </div>
                                <h6 className="m-0">Experienced Innovators</h6>
                                <p className="m-0">Our team combines deep industry expertise with innovative thinking to solve your toughest challenges.</p>
                            </div>

                            <div>
                                <img src={Rowline} alt="" className="img-fluid" />
                            </div>

                            <div className="mt-3">
                                <div>
                                    <img src={Shield} alt="Conflict Icon" className="img-fluid" />
                                </div>
                                <h6 className="m-0">Reliability You Can Trust</h6>
                                <p className="m-0">We’re committed to delivering excellence with round-the-clock support and seamless project management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
