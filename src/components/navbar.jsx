import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown, FaCartArrowDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu"; // Corrected import
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { CgClose, CgCloseO } from "react-icons/cg";
import { useCart } from "../context/CardContext";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const [openNav, setOpenNav] = useState(false);
  const { cartItem } = useCart();

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="bg-white py-3 shadow-md px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo + Location */}
        <div className="flex items-center gap-7">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl text-black">
              <span className="text-red-500 font-serif">N</span>afi
              <span className="text-red-500 font-serif">S</span>tore
            </h1>
          </Link>

          {/* Location Dropdown */}
          <div className="relative hidden md:flex">
            <div
              className="flex gap-1 cursor-pointer text-gray-700 items-center"
              onClick={toggleDropdown}
            >
              <MapPin className="text-red-500" />
              <span className="font-semibold">
                {location ? (
                  <div>
                    <p>{location.amenity}</p>
                    <p>{location.road}</p>
                  </div>
                ) : (
                  "Address"
                )}
              </span>
              <FaCaretDown />
            </div>

            {openDropdown && (
              <div className="absolute top-10 left-0 w-[260px] z-50 bg-white shadow-md p-5 border-gray-200 border rounded-md">
                <h1 className="font-semibold mb-4 text-xl flex justify-between">
                  Change Location
                  <span className="cursor-pointer" onClick={toggleDropdown}>
                    <CgCloseO />
                  </span>
                </h1>
                <button
                  onClick={getLocation}
                  className="bg-black text-white px-3 py-1 rounded-md cursor-pointer hover:bg-white hover:text-black border border-black transition"
                >
                  Detect Location
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Menu */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 hidden md:flex items-center text-xl font-semibold text-black">
            {["/", "/products", "/about", "/contact"].map((path, idx) => (
              <li key={idx}>
                <NavLink
                  to={path}
                  onClick={() => window.scrollTo(0, 0)}
                  className={({ isActive }) =>
                    `${isActive ? "border-b-4 border-red-500 text-red-500" : "text-black"} cursor-pointer transition-all`
                  }
                >
                  {["Home", "Products", "About", "Contact"][idx]}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaCartArrowDown className="h-7 w-7" />
            <span className="absolute -top-3 -right-3 bg-red-500 px-2 py-1 rounded-full text-white text-sm">
              {cartItem.length}
            </span>
          </Link>

          {/* Clerk Auth */}
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

        
          {openNav ? (
            <HiMenuAlt3 onClick={() => setOpenNav(false)} className="h-7 w-7 md:hidden cursor-pointer" />
          ) : (
            <HiMenuAlt1 onClick={() => setOpenNav(true)} className="h-7 w-7 md:hidden cursor-pointer" />
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navbar;
