import React, { createContext, useState } from "react";
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
    //   console.log("Products fetched successfully", response.data);
      const products = response.data;
      setData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchallproducts }}>
      {children}
    </DataContext.Provider>
  );
};
