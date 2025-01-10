import React, { createContext, useState } from "react";
import Banner1 from "../../Component/Solution/PmsSolution/SolutionImages/parking_management.png";
import Banner2 from "../../Component/Solution/PmsSolution/SolutionImages/autopay1 1.png";
import Banner3 from "../../Component/Solution/PmsSolution/SolutionImages/M PARK BANNER 1 (1).png";

export const SolutionContext = createContext();

export const SolutionProvider = ({ children }) => {
  const [bannerImageUrl, setBannerImageUrl] = useState(Banner1);

  const updateBannerImage = (type) => {
    const imageUrls = {
      "A-Park": Banner2,
      "F-Park": Banner1,
      "M-Park": Banner3,
    };
    setBannerImageUrl(imageUrls[type] || Banner1);
  };

  return (
    <SolutionContext.Provider value={{ bannerImageUrl, updateBannerImage }}>
      {children}
    </SolutionContext.Provider>
  );
};
