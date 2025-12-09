import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

const OrderSuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <AiOutlineCheckCircle className="text-green-500 mx-auto text-6xl mb-4" />
        <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your order has been placed successfully.
          <br />
          You will receive a confirmation email shortly.
        </p>
        <Link to="/">
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
