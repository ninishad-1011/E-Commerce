import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DataProvider } from "./context/DataContext";
import { CartProvider } from "./context/CardContext";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/products";
import SingleProducts from "./pages/singleProduct";
import Cart from "./pages/cart";
import Footer from "./components/Footer";
import CategoryProducts from "./pages/categoryProducts";
import OrderSuccessPage from "./pages/orderSucces";

const App = () => {
  const [location, setLocation] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
            const response = await axios.get(url);

            const address = response.data.address;
            setLocation({
              county: address.county || "",
              road: address.road || "",
              state: address.state || "",
              postcode: address.postcode || "", // ✅ add postcode
              country: address.country || "", // ✅ add country
            });

            setOpenDropdown(false);
          } catch (err) {
            console.log("Error fetching location:", err);
          }
        },
        (err) => console.log("Geolocation error:", err)
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar
          location={location}
          getLocation={getLocation}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProducts />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/orderSuccess" element={<OrderSuccessPage />} />
          <Route
            path="/cart"
            element={<Cart location={location} getLocation={getLocation} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
