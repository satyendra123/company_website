import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("U-Park");

  const updateSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ProductContext.Provider value={{ selectedCategory, updateSelectedCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
