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
      <div className="max-w-7xl flex mx-auto gap-4 items-center justify-between py-7 px-4">
        {categoryOnlyData && categoryOnlyData.length > 0 ? (
          categoryOnlyData.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => navigate(`/category/${item}`)}
                className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer"
              >
                {item}
              </button>
            </div>
          ))
        ) : (
          <p className="text-white">No categories found</p>
        )}
      </div>
    </div>
  );
};

export default Category;
