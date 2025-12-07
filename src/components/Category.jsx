import React, { useEffect } from "react";
import { useData } from "../context/DataContext";

const Category = () => {
  const { data, fetchallproducts } = useData();

  const uniqueCategories = (data) => {
    let newval = data?.map((curElm) => curElm.category.name);
    newval = [...new Set(newval)];
    return newval;
  };

  const categoryOnlyData = uniqueCategories(data);
  console.log("Category Data", categoryOnlyData);

  console.log("Category Data", categoryOnlyData);

  useEffect(() => {
    fetchallproducts();
  }, []);

  return (
    <div className="bg-[#101829] ">
        <div className="max-w-7xl flex mx-auto gap-4 items-center justify-between py-7 px4">
            {
                categoryOnlyData?.map((item,index) =>{

                    return <div key={index} >
                        <button className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer  ">{item}</button>
                    </div>


                } 
                )
            }
        </div>


     
    </div>
  );
};

export default Category;
