import React, { useEffect, useState } from 'react';
import { useData } from "../context/DataContext";
import FilterSection from "../components/filtersection";
import ProductCard from '../components/productcard'

const Products = () => {
  const { data, fetchallproducts } = useData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [pricerange, setPricerange] = useState([0, 5000]);

  useEffect(() => {
    fetchallproducts();
  }, []);

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleBrandChange = (e) => setBrand(e.target.value);
  const handleResetFilters = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setPricerange([0, 5000]);
  };

  const filteredProducts = data?.filter(p =>
    (category === "All" || p.category.name === category) &&
    (brand === "All" || p.brand === brand) &&
    p.price >= pricerange[0] &&
    p.price <= pricerange[1] &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      {data?.length > 0 ? (
        <div className="flex gap-8">
          {/* Filter Section */}
          <FilterSection
            handleCategoryChange={handleCategoryChange}
            handleBrandChange={handleBrandChange}
            handleResetFilters={handleResetFilters}
            category={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
            brand={brand}
            setBrand={setBrand}
            pricerange={pricerange}
            setPricerange={setPricerange}
          />

          {/* Products */}
          <div className="grid grid-cols-4 gap-7 mt-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <div>No items found</div>
            )}
          </div>
        </div>
      ) : (
        <div>Loading products...</div>
      )}
    </div>
  );
};

export default Products;
