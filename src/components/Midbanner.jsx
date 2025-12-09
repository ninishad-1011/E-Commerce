import React from 'react'
import banner from '../assets/banner1.jpg'
import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    <div className='bg-gray-100 md:py-24'>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
        <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
            <div className='text-center text-white px-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Next-Gen Electronics at Your Fingertips</h1>
                <p className='text-lg md:text-xl mb-6'>Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</p>
                  <Link to="/products"><button className="
                  mt-4 px-6 py-2 
                  bg-gradient-to-r from-purple-500 to-pink-500 
                  text-white font-semibold rounded-lg 
                  hover:scale-105 transition-transform
                ">
                  Shop Now
                </button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner