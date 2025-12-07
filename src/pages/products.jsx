import React, { useEffect } from 'react';
import { useData } from "../context/DataContext";
import FilterSection from "../components/filtersection";
import ProductCard from '../components/productcard';

const Products = () => {
  const { data, fetchallproducts } = useData();

  useEffect(() => {
    fetchallproducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      {data?.length > 0 ? (
        <div className="flex gap-8">
          {/* Filter Section */}
          <FilterSection />

          {/* Products */}
          <div className="grid grid-cols-4 gap-7 mt-10">
            {data?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default Products;
