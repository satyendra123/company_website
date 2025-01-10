import React from "react";
import Reactangle from "./CaseStudyImages/rectangle.png";
import Rec from "./CaseStudyImages/rec.png";
import Rec1 from "./CaseStudyImages/rec1.png";
import SolutionCaseStudy from '../../../../Utils/SolutionLayOut/SolutionCaseStudy/SolutionCaseStudy'; 
import KnowMore from "./Know_More"
const CaseStudies = () => {
  return (
    <SolutionCaseStudy 
      caseStudyHeaderText="CASE STUDIES"
      caseStudySubHeaderText1=""
      caseStudySubHeaderText2=""
      caseStudyLeftImg={Reactangle}
      caseStudyLeftImgAlt="case study"
      caseStudyLeftImgTitle="Government Institution"
      caseStudyLeftImgDescription="Government sectors require robust security and efficient parking solutions to manage high visitor traffic, ensure perimeter safety, streamline vehicle access, and enhance overall operational efficiency and control."
      caseStudyRightTopImg={Rec}
      caseStudyRightTopImgAlt="case study"
      caseStudyRightTopImgTitle='Supreme Court of India'
      caseStudyRightTopImgDescription="The Supreme Court of India is the apex judicial authority in the country, handling sensitive legal matters."
      caseStudyRightBottomImg={Rec1}
      caseStudyRightBottomImgAlt="case study"
      caseStudyRightBottomImgTitle='Delhi High Court,New Delhi'
      caseStudyRightBottomImgDescription="The Delhi High Court is a prominent judicial institution, managing high volumes of visitors and staff daily."
      knowmore="/pgssolution/knowmore"
    />
  );
};

export default CaseStudies;
