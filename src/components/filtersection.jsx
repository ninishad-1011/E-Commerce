import React from 'react';
import { useData } from '../context/DataContext';

function FilterSection({
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
}) {
  const { categoryOnlyData, brandOnlyData } = useData();

  return (
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max w-[250px]'>

      {/* Search */}
      <input
        type="text"
        placeholder='Search..'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-white p-2 w-full rounded-md border-gray-400 border'
      />

      {/* Category */}
      <h1 className='mt-5 font-semibold text-xl'>Category</h1>
      <div className='flex flex-col gap-2 mt-3'>
        {categoryOnlyData?.map((item, index) => (
          <label key={index} className='flex gap-2 items-center cursor-pointer'>
            <input
              type="checkbox"
              name={item}
              checked={category === item}
              value={item}
              onChange={handleCategoryChange}
              className='accent-red-500'
            />
            <span className='uppercase'>{item}</span>
          </label>
        ))}
      </div>

      {/* Brand */}
      <h1 className='mt-5 font-semibold text-xl'>Brand</h1>
      <div className='mt-3'>
        <select
          className='w-full p-2 border border-gray-400 rounded-md bg-white'
          value={brand}
          onChange={handleBrandChange}
        >
          <option value="">Select Brand</option>
          {brandOnlyData?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <h1 className='mt-5 font-semibold text-xl mb-3'>Price Range</h1>
      <div className='flex flex-col gap-2'>
        <label>Price Range ${pricerange[0]} - ${pricerange[1]}</label>
        <input
          type="range"
          min={0}
          max={1000}
          value={pricerange[1]}
          onChange={(e) => setPricerange([pricerange[0], Number(e.target.value)])}
          className='accent-red-500'
        />
      </div>

      <button
        className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer'
        onClick={handleResetFilters}
      >
        Reset Filters
      </button>

    </div>
  );
}

export default FilterSection;
