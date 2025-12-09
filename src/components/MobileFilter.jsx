import React from "react";
import { useData } from "../context/DataContext";
import { IoClose } from "react-icons/io5";

const MobileFilter = ({
  openFilter,
  setOpenFilter,
  search,
  setSearch,
  brand,
  setBrand,
  pricerange,
  setPricerange,
  category,
  setCategory,
  handleBrandChange,
  handleCategoryChange,
  handleResetFilters
}) => {
  const { categoryOnlyData, brandOnlyData } = useData();

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          openFilter ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenFilter(false)}
      ></div>

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[300px] h-full bg-white z-50 shadow-lg p-5 overflow-y-auto
        transform transition-transform duration-300 ${
          openFilter ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">Filters</h2>
          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => setOpenFilter(false)}
          />
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Category */}
        <h1 className="font-semibold text-lg mt-4">Category</h1>
        <div className="flex flex-col gap-2 mt-3">
          {categoryOnlyData?.map((item, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
                className="accent-red-500"
              />
              <span className="uppercase">{item}</span>
            </label>
          ))}
        </div>

        {/* Brand */}
        <h1 className="font-semibold text-lg mt-6">Brand</h1>
        <select
          value={brand}
          onChange={handleBrandChange}
          className="w-full p-2 border rounded-md mt-2"
        >
          <option value="">Select Brand</option>
          {brandOnlyData?.map((b, index) => (
            <option key={index} value={b}>
              {b}
            </option>
          ))}
        </select>

        {/* Price Range */}
        <h1 className="font-semibold text-lg mt-6">Price Range</h1>
        <label className="text-sm">
          ${pricerange[0]} - ${pricerange[1]}
        </label>
        <input
          type="range"
          min={0}
          max={1000}
          value={pricerange[1]}
          onChange={(e) =>
            setPricerange([pricerange[0], Number(e.target.value)])
          }
          className="w-full accent-red-500"
        />

        {/* Reset Button */}
        <button
          onClick={handleResetFilters}
          className="bg-red-500 text-white w-full py-2 rounded-md mt-6"
        >
          Reset Filters
        </button>
      </div>
    </>
  );
};

export default MobileFilter;
