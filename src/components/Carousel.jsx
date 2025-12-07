import React, { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";

const Carousel = () => {
  const { fetchallproducts, data } = useContext(DataContext);

  useEffect(() => {
    fetchallproducts();
  }, []);

  // Left Arrow
  const SamplePrevArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f53347",
          borderRadius: "40%",
          width: "50px",
          height: "50px",
          zIndex: 10,
          left: "10px",
        }}
        onClick={onClick}
      >
        {/* <AiOutlineArrowLeft color="white" size={25} /> */}
      </div>
    );
  };

  // Right Arrow
  const SampleNextArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f53347",
          borderRadius: "40%",
          width: "50px",
          height: "50px",
          zIndex: 10,
          right: "10px",
        }}
        onClick={onClick}
      >
        {/* <AiOutlineArrowRight color="white" size={25} /> */}
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (!data || data.length === 0) {
    return <div className="text-center py-20">Loading products...</div>;
  }

  return (
    <div className="max-w-full mx-auto ">
      <Slider {...settings}>
        {data.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center h-[600px] px-4 text-white">
              <div className="space-y-6">
                <h3 className="text-red-500 font-semibold font-sans text-sm">
                  The Best E-Commerce Site In Bangladesh
                </h3>
                <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px]">
                  {item.title}
                </h1>
                <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                  {item.description}
                </p>
                <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                  Shop Now
                </button>
              </div>
              <div>
                <img className="rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400"
                  src={item.images[0]}
                  alt={item.title}/>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Category/>
    </div>
  );
};

export default Carousel;
