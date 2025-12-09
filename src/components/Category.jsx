import React, { useEffect } from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { fetchallproducts, categoryOnlyData } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchallproducts();
  }, []);

  return (
    <div className="bg-[#101829]">
      <div
        className="
          max-w-7xl mx-auto 
          py-5 px-4 
          
          flex gap-3 
          whitespace-nowrap 

          overflow-x-auto       /* Mobile/Tablet scroll */
          scrollbar-hide        

          lg:overflow-x-visible /* Desktop: No scroll */
          lg:flex-wrap          /* Desktop: Wrap into multiple rows if needed */
        "
      >
        {categoryOnlyData && categoryOnlyData.length > 0 ? (
          categoryOnlyData.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(`/category/${item}`)}
              className="
                uppercase 
                bg-gradient-to-r from-red-500 to-purple-500 
                text-white 
                px-4 py-2 
                rounded-md 
                cursor-pointer 
                text-sm 
                sm:text-base 
                flex-shrink-0 
              "
            >
              {item}
            </button>
          ))
        ) : (
          <p className="text-white">No categories found</p>
        )}
      </div>
    </div>
  );
};

export default Category;
