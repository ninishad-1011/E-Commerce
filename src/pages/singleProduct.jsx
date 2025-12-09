import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../assets/Loading4.webm";
import { IoCartOutline } from "react-icons/io5";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProduct(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <video muted autoPlay loop className="w-48 h-48">
          <source src={Loading} type="video/webm" />
        </video>
      </div>
    );
  }

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="flex gap-8">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-1/2 object-cover rounded-md"
        />
        <div className="flex-1">
          <p className="text-lg font-bold mb-2">Price: ${product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          {/* quantity Selector */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">
              Quantity
            </label>

            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button className="px-6 flex gap-2 py-2 bg-red-500 text-white text-lg">
              <IoCartOutline className="mt-1" />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
