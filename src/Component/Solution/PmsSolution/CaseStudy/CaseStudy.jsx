import React from "react";
import Reactangle from "./CaseStudyImages/MainAirport-removebg-preview (1).png";
import Rec from "./CaseStudyImages/DSC_1377.jpg";
import Rec1 from "./CaseStudyImages/GoaAirport.jpg";
import SolutionCaseStudy from '../../../../Utils/SolutionLayOut/SolutionCaseStudy/SolutionCaseStudy'; 

const CaseStudies = () => {
  return (
    <SolutionCaseStudy 
      caseStudyHeaderText="CASE STUDIES"
      // caseStudySubHeaderText1="Architecture Diagram Of"
      // caseStudySubHeaderText2="On-Street PMS"
      caseStudyLeftImg={Reactangle}
      caseStudyLeftImgAlt="case study"
      caseStudyLeftImgTitle="Airport"
      caseStudyLeftImgDescription="Airport operations require efficient parking for smooth passenger and internal activities. Houston Systems offers integrated modules, PARKSURE and PARKSIM, to streamline airport parking and traffic management."
      caseStudyRightTopImg={Rec}
      caseStudyRightTopImgAlt="case study"
      caseStudyRightTopImgTitle='Amritsar International Airport'
      caseStudyRightTopImgDescription="Amritsar Airport handles over 10,000 passengers daily and offers 1,000 parking spaces for 5,000+ visitors."
      caseStudyRightBottomImg={Rec1}
      caseStudyRightBottomImgAlt="case study"
      caseStudyRightBottomImgTitle='Goa International Airport'
      caseStudyRightBottomImgDescription="GOA Airport handles 15,000+ passengers daily with 1,000 parking spaces. It offers 6 entry and 4 exit lanes,"
      knowmore="/pmssolution/knowmore"
    />
  );
};

export default CaseStudies;
