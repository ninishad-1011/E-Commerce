import React, { createContext, useState, useContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetch all products
  const fetchallproducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      const products = response.data;
      setData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  const uniqueCategories = (data) => {
    let newval = data?.map((curElm) => curElm.category.name);
    newval = ["All",...new Set(newval)];
    return newval;
  };

  const categoryOnlyData = uniqueCategories(data,"category");
  const brandOnlyData = uniqueCategories(data,"brand")
  return (
    <DataContext.Provider value={{ data, setData, fetchallproducts,categoryOnlyData,brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext
export const useData = () => useContext(DataContext);
