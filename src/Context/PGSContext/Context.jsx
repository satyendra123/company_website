import React, { createContext, useState } from "react";
import Banner1 from '../../Component/Solution/PgsSolution/Banner/BannerIMG/PGS_SOLUTION_BANNER.png'
import Banner2 from '../../Component/Solution/PgsSolution/Banner/BannerIMG/Parking Information3 1 (1).png'
import Banner3 from '../../Component/Solution/PgsSolution/Banner/BannerIMG/carbanner.png'

export const SolutionContext = createContext();

export const SolutionProvider = ({ children }) => {
  const [bannerImageUrl, setBannerImageUrl] = useState(Banner1);

  const updateBannerImage = (type) => {

    const imageUrls = {
      "U-Park": Banner2,
      "V-Park": Banner1,
      "W-Park": Banner3,
    };

    setBannerImageUrl(imageUrls[type] || Banner1);
  };

  return (
    <SolutionContext.Provider value={{ bannerImageUrl, updateBannerImage }}>
      {children}
    </SolutionContext.Provider>
  );
};
