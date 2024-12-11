import reasonsimage1 from "../../Container/images/reasonsimage1.jpg";
import reasonsimage2 from "../../Container/images/reasonsimage2.jpg";
import reasonslogo1 from "../../Container/images/reasonslogo1.jpg";
import reasonslogo2 from "../../Container/images/reasonslogo2.jpg";
import "./Reasontocount.css";
const Reasontocountonus = () => {
  return (
    <div>
      <div className="section-reasons">
        <h3 className="section-header">Reasons to count on us</h3>
        <h1 className="section-subheader">
          Quality is not an option, it's our standard
        </h1>
      </div>
      <div className="container">
        <div className="section-body">
          <div className="section-set">
            <div className="section-text">
              Hoston system is a leading provider in access automation, parking,
              and security solutions for residential and industrial clients
            </div>
            <div className="section-text-2">
              {" "}
              we don't just promise, we deliver
            </div>
            <div className="reasons-logo">
              <div>
                <img src={reasonslogo1} alt="" />
              </div>
              <div>
                <img src={reasonslogo1} alt="" />
              </div>
              <div>
                <img src={reasonslogo2} alt="" />
              </div>
            </div>
          </div>
          <div className="section-image">
            <img src={reasonsimage1} alt="" className="section-image-1" />
            <img src={reasonsimage2} alt="" className="section-image-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasontocountonus;
