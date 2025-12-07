import React, { useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Carousel = () => {
    const { fetchallproducts, data } = useContext(DataContext);

    // Fetch products on component mount
    useEffect(() => {
        fetchallproducts();
    }, []);

    console.log(data);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Handle loading state if data is not fetched yet
    if (!data || data.length === 0) {
        return <div className="text-center py-20">Loading products...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto py-10">
            <Slider {...settings}>
                {data.slice(0, 7).map((item, index) => (
                    <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'>
                        <div className='flex flex-col md:flex-row gap-10 items-center justify-center h-[600px] px-4 text-white'>
                            
                            {/* Product Image */}
                            {item.images && item.images[0] && (
                                <div className='w-full md:w-1/2 flex justify-center'>
                                    <img
                                        src={item.images[0]}  // use the first image
                                        alt={item.title}
                                        className='h-64 object-contain'
                                    />
                                </div>
                            )}

                            {/* Product Info */}
                            <div className='space-y-6 md:w-1/2 text-center md:text-left'>
                                <h2 className='text-3xl font-bold'>{item.title}</h2>
                                <p className='text-lg'>Price: ${item.price}</p>
                                <p>{item.description || "No description available."}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
