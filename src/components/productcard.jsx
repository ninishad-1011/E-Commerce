// ProductCard.jsx
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const ProductCard = ({ product }) => {
    
  return (
    <div
      className="border border-gray-200 rounded-lg p-3 cursor-pointer 
      hover:scale-[1.03] hover:shadow-xl transition-all 
      w-[230px] h-[380px] flex flex-col justify-between bg-white"
    >
      
      {/* Image Section */}
      <div className="w-full h-[180px] bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
        <img
          src={product?.images?.[0]}
          alt={product?.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title */}
      <h2 className="line-clamp-2 mt-2 font-semibold text-sm">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-lg text-gray-800 font-bold">${product.price}</p>

      {/* Button */}
      <button className="bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold">
        <IoCartOutline className="w-6 h-6" /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
