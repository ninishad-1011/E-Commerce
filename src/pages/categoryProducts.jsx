import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from "../assets/Loading4.webm";
import { ChevronLeft } from 'lucide-react';
import ProductListView from '../components/ProductListView';

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const categoryName = params.category;
  const navigate = useNavigate();

  // Fetch all categories to get the ID
  const getCategoryId = async (name) => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      const category = res.data.find(c => c.name.toLowerCase() === name.toLowerCase());
      return category?.id;
    } catch (error) {
      console.log("Error fetching categories:", error);
      return null;
    }
  };

  const getFilterData = async () => {
    try {
      setLoading(true);
      const categoryId = await getCategoryId(categoryName);
      if (!categoryId) {
        setSearchData([]);
        setLoading(false);
        return;
      }

      const res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
      setSearchData(res.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0,0);
  }, [categoryName]);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-[400px]'>
         <video muted autoPlay loop>
          <source src={Loading} type='video/webm'/>
         </video>
      </div>
    );
  }

  return (
    <div>
      <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
        <button 
          onClick={() => navigate('/')} 
          className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'>
          <ChevronLeft /> Back
        </button>
        {searchData.length > 0 ? (
          searchData.map((product, index) => (
            <ProductListView key={index} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-700 text-lg mt-10">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProduct;
