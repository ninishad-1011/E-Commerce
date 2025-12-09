import React, { useMemo } from "react";
import { useCart } from "../context/CardContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png";

// Reusable Input Field Component
const InfoField = ({ label, value, readOnly = false, placeholder }) => (
  <div className="flex flex-col space-y-1 w-full">
    <label>{label}</label>
    <input
      type="text"
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      className="p-2 rounded-md w-full"
    />
  </div>
);

// Cart Item Component
const CartItem = ({ item, cartItem, updateQuantity, deleteItem }) => (
  <div className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-full">
    <div className="flex items-center gap-4">
      <img src={item.images} alt={item.title} className="w-20 h-20 rounded-md" />
      <div>
        <h1 className="md:w-[300px] line-clamp-2">{item.title}</h1>
        <p className="text-red-500 font-semibold text-lg">${item.price}</p>
      </div>
    </div>

    <div className="bg-red-500 text-white flex gap-2 sm:gap-3 md:gap-4 p-1 sm:p-2 md:p-3 rounded-md w-20 sm:w-24 md:w-[150px] font-bold text-sm sm:text-base md:text-xl">
      <button onClick={() => updateQuantity(cartItem, item.id, "decrease")} className="cursor-pointer px-2 sm:px-3 md:px-4">-</button>
      <span>{item.quantity}</span>
      <button onClick={() => updateQuantity(cartItem, item.id, "increase")} className="cursor-pointer px-2 sm:px-3 md:px-4">+</button>
    </div>

    <span onClick={() => deleteItem(item.id)} className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl">
      <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer" />
    </span>
  </div>
);

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem, setCartItem } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  // Total Price calculation
  const totalPrice = useMemo(
    () => cartItem.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItem]
  );

  const handleCheckout = () => {
    setCartItem([]); // empty cart
    navigate("/ordersuccess"); // go to success page
  };

  if (cartItem.length === 0) {
    return (
      <div className="flex flex-col gap-3 justify-center items-center h-[600px]">
        <h1 className="text-red-500/80 font-bold text-5xl text-muted">
          Oh no! Your cart is empty
        </h1>
        <img src={emptyCart} alt="" className="w-[400px]" />
        <button
          onClick={() => navigate("/products")}
          className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0">
      <h1 className="font-bold text-2xl">My Cart ({cartItem.length})</h1>

      <div className="mt-10">
        {cartItem.map(item => (
          <CartItem
            key={item.id}
            item={item}
            cartItem={cartItem}
            updateQuantity={updateQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 mt-10">
        {/* Delivery Info */}
        <div className="bg-gray-100 rounded-md p-7 space-y-2">
          <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>
          <InfoField label="Full Name" value={user?.fullName || ""} readOnly />
          <InfoField label="Address" value={location?.county || ""} readOnly />
          <div className="flex w-full gap-5">
            <InfoField label="State" value={location?.state || ""} readOnly />
            <InfoField label="PostCode" value={location?.postcode || ""} readOnly />
          </div>
          <div className="flex w-full gap-5">
            <InfoField label="Country" value={location?.country || ""} readOnly />
            <InfoField label="Phone No" value="" placeholder="Enter your Number" />
          </div>
          <button onClick={getLocation} className="bg-red-500 text-white px-3 py-2 rounded-md mt-3 w-full">
            Detect Location
          </button>
        </div>

        {/* Bill Details */}
        <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 space-y-2 h-max">
          <h1 className="text-gray-800 font-bold text-xl">Bill Details</h1>
          <div className="flex justify-between items-center">
            <h1 className="flex gap-1 items-center text-gray-700"><LuNotebookText /> Items total</h1>
            <p>${totalPrice}</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="flex gap-1 items-center text-gray-700"><MdDeliveryDining /> Delivery Charge</h1>
            <p className="text-red-500 font-semibold"><span className="text-gray-600 line-through">$25</span> FREE</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="flex gap-1 items-center text-gray-700"><GiShoppingBag /> Handling Charge</h1>
            <p className="text-red-500 font-semibold">$5</p>
          </div>
          <hr className="text-gray-200 mt-2" />
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">Grand total</h1>
            <p className="font-semibold text-lg">${totalPrice + 5}</p>
          </div>

          <div className="flex gap-3 mt-5">
            <input type="text" placeholder="Enter Promo Code" className="p-2 rounded-md w-full" />
            <button className="bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md">Apply</button>
          </div>

          <button onClick={handleCheckout} className="bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
