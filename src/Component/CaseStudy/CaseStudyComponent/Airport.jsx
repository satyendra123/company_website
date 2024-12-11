import React from "react";
import CaseStudyComponent from "../../../Utils/CaseStudyComponent/CaseStudyComponent";
import AirportImg from "../CaseStudyImage/airport.png";
const Airport = () => {
  const footerItems = [
    { value: "6", label: "Airport" },
    { value: "36", label: "Lane", middle: true },
    { value: "25K", label: "Slots" },
  ];
  return (
    <div>
      <CaseStudyComponent
        // title="For easily managing large numbers"
        description={[
          "Airport operations require efficient parking for smooth passenger and internal activities. Houston Systems offers integrated modules, PARKSURE and PARKSIM, to streamline airport parking and traffic management.",
          "Amritsar Airport handles over 10,000 passengers daily and offers 1,000 parking spaces for 5,000+ visitors. It has 3 entry and 4 exit lanes with both manned and unmanned payment terminals. Digital displays guide users with real-time parking availability.",
          "GOA Airport handles 15,000+ passengers daily with 1,000 parking spaces. It offers 6 entry and 4 exit lanes, featuring both manned and unmanned payment options, and real-time parking updates at entry points.",
          "Agartala Airport handles 4,000+ passengers daily with 300 parking spaces. It features 2 entry and 2 exit lanes, offering both manned and unmanned payment options, with real-time parking updates.",
        ]}
        footerItems={footerItems}
        image={AirportImg}
        placeholder="AIRPORT"
      />
    </div>
  );
};
export default Airport;
