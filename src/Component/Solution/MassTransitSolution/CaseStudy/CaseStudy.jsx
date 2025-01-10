import React from "react";
import Reactangle from "./CaseStudyImages/rectangle.png";
import Rec from "./CaseStudyImages/rec.png";
import Rec1 from "./CaseStudyImages/rec1.png";
import SolutionCaseStudy from '../../../../Utils/SolutionLayOut/SolutionCaseStudy/SolutionCaseStudy'; 

const CaseStudies = () => {
  return (
    <SolutionCaseStudy 
      caseStudyHeaderText="CASE STUDIES"
      
      caseStudyLeftImg={Reactangle}
      caseStudyLeftImgAlt="case study"
      caseStudyLeftImgTitle="Lorem Ipsum"
      caseStudyLeftImgDescription="Houston Systems is a leading provider in access automation, parking, and security solutions for residential and industrial clients."
      caseStudyRightTopImg={Rec}
      caseStudyRightTopImgAlt="case study"
      caseStudyRightTopImgTitle='Lorem Ipsum'
      caseStudyRightTopImgDescription="Houston Systems is a leading provider in access automation."
      caseStudyRightBottomImg={Rec1}
      caseStudyRightBottomImgAlt="case study"
      caseStudyRightBottomImgTitle='Lorem Ipsum'
      caseStudyRightBottomImgDescription="Houston Systems is a leading provider in access automation."
      knowmore="masstsolution/knowmore"
    />
  );
};

export default CaseStudies;
