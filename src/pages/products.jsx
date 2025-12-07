import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import FilterSection from "../components/filtersection";
import ProductCard from "../components/productcard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";

const Products = () => {
  const { data, fetchallproducts } = useData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [pricerange, setPricerange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // Ek page e koto product dekhabo

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
    setPage(1);
  };

  const pageHandler = (selectedPage) => setPage(selectedPage);

  const filteredProducts = data?.filter(
    (p) =>
      (category === "All" || p.category.name === category) &&
      (brand === "All" || p.brand === brand) &&
      p.price >= pricerange[0] &&
      p.price <= pricerange[1] &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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

          {/* Products Section */}
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-7 mt-10">
              {filteredProducts.length > 0 ? (
                filteredProducts
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))
              ) : (
                <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
                  <Lottie
                    animationData={notfound}
                    loop={true}
                    className="w-96 h-96 mx-auto"
                  />
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredProducts.length > itemsPerPage && (
              <Pagination
                pageHandler={pageHandler}
                page={page}
                totalPages={totalPages}
              />
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
