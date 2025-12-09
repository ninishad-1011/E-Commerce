import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center">About NafiStore</h1>

        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-red-600">NafiStore</span>, your one-stop destination for quality products that make life easier and more enjoyable. From everyday essentials to trending must-haves, we’re here to bring you premium products paired with exceptional service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
          At Nafi Store, our mission is to make shopping simple, accessible, and affordable for everyone. We’re passionate about connecting people with products they love, ensuring quality, convenience, and value in every purchase.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Why Choose NafiStore?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>High-quality products across a wide range of categories</li>
            <li>Fast, reliable, and secure shipping</li>
            <li>Friendly customer support ready to assist</li>
            <li>Easy returns and a hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 text-base">
          We envision a world where shopping is seamless, satisfying, and accessible to all. At Nafi Store, we’re committed to staying ahead of trends and offering products that enhance daily life without breaking the bank.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Join the NafiStore Family</h3>
          <p className="text-gray-700 mb-4">
          Whether you’re looking for practical essentials, trendy finds, or something just for fun — Nafi Store has something for everyone. Shop with us and experience a smarter, easier, and more enjoyable way to buy.
          </p>
         <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
            Start Shopping
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default About;