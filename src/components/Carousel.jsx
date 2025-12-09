import React, { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category from "./Category";
import { Link } from "react-router-dom";

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
          width: "45px",
          height: "45px",
          zIndex: 20,
          left: "10px",
        }}
        onClick={onClick}
      ></div>
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
          width: "45px",
          height: "45px",
          zIndex: 20,
          right: "10px",
        }}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (!data || data.length === 0) {
    return <div className="text-center py-20">Loading products...</div>;
  }

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {data.slice(0, 5).map((item, index) => (
          <div key={index} className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
            
            {/* Main Container */}
            <div className="
              flex flex-col 
              md:flex-row 
              items-center justify-center 
              gap-8 md:gap-16 
              h-[550px] md:h-[600px] 
              px-4 md:px-10 
              text-white
            ">
              
              {/* Text Section */}
              <div className="space-y-6 text-center md:text-left max-w-lg">
                <h3 className="text-red-500 font-semibold text-xs md:text-sm  mt-4 tracking-wide">
                  The Best E-Commerce Site In Bangladesh
                </h3>

                <h1 className="text-2xl md:text-4xl font-bold uppercase leading-snug line-clamp-3">
                  {item.title}
                </h1>

                <p className="text-gray-300 text-sm md:text-base line-clamp-3">
                  {item.description}
                </p>

                <Link to="/products"><button className="
                  mt-4 px-6 py-2 
                  bg-gradient-to-r from-purple-500 to-pink-500 
                  text-white font-semibold rounded-lg 
                  hover:scale-105 transition-transform
                ">
                  Shop Now
                </button></Link>
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                <img
                  className="
                    rounded-full 
                    w-[260px] md:w-[500px] lg:w-[550px] 
                    hover:scale-105 transition-all 
                    shadow-2xl shadow-red-400
                  "
                  src={item.images[0]}
                  alt={item.title}
                />
              </div>

            </div>
          </div>
        ))}
      </Slider>

      {/* Category Under Carousel */}
      <Category />
    </div>
  );
};

export default Carousel;
