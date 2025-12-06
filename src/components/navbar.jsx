import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown, FaCartArrowDown } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = ({ location }) => {
  return (
    <div className="bg-white py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo section */}
        <div className="flex items-center gap-7">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl text-black">
              <span className="text-red-500 font-serif">N</span>afi
              <span className="text-red-500 font-serif">S</span>tore
            </h1>
          </Link>

          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? (
                <div>
                  <p>{location.county}</p>
                    <p>{location.road}</p>
                  <p>{location.state}</p>
                
                </div>
              ) : (
                "Address"
              )}
            </span>
            <FaCaretDown />
          </div>
        </div>

        {/* menu section */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold  text-black">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-4 border-red-500 transition-all text-red-500"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-4 border-red-500 transition-all text-red-500"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-4 border-red-500 transition-all text-red-500"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-4 border-red-500 transition-all text-red-500"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <Link to="/cart" className="relative ">
            <FaCartArrowDown className="h-7 w-7" />
            <span className="absolute -top-3 -right-3 bg-red-500 px-2 py-1 rounded-full text-white text-sm">
              0
            </span>
          </Link>

          <div className="">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
