import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import FilterSection from "../components/filtersection";
import ProductCard from "../components/productcard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";
import Loading from "../assets/Loading4.webm";
import MobileFilter from "../components/MobileFilter";

const Products = () => {
  const { data, fetchallproducts } = useData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [pricerange, setPricerange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  const itemsPerPage = 8;

  useEffect(() => {
    fetchallproducts();
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const handleResetFilters = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setPricerange([0, 5000]);
    setPage(1);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const filteredProducts = data?.filter((p) => {
    const categoryName = p?.category?.name || p?.category;
    return (
      (category === "All" || categoryName === category) &&
      (brand === "All" || p.brand === brand) &&
      p.price >= pricerange[0] &&
      p.price <= pricerange[1] &&
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      {/* Mobile Filter */}
      <MobileFilter
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        search={search}
        setSearch={setSearch}
        brand={brand}
        setBrand={setBrand}
        pricerange={pricerange}
        setPricerange={setPricerange}
        category={category}
        setCategory={setCategory}
        handleBrandChange={handleBrandChange}
        handleCategoryChange={handleCategoryChange}
        handleResetFilters={handleResetFilters}
      />

      {data?.length > 0 ? (
        <div>
          {/* Mobile Filter Button */}
          <button
            className="md:hidden bg-red-500 text-white px-4 py-2 rounded-md mt-5"
            onClick={() => setOpenFilter(true)}
          >
            Open Filters
          </button>

          <div className="flex gap-8">
            {/* Desktop Filter */}
            <div className="hidden md:block">
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
            </div>

            {/* Products */}
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {filteredProducts?.length > 0 ? (
                  filteredProducts
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))
                ) : (
                  <div className="col-span-4 flex justify-center items-center mt-10">
                    <Lottie
                      animationData={notfound}
                      loop={true}
                      className="w-72 h-72 mx-auto"
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
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Products;
