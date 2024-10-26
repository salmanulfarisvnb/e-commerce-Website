import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Abuot,
  Cart,
  Collection,
  Contact,
  Home,
  Login,
  Orders,
  PlaceOrder,
  Product,
} from "./pages";
import Navbar from "./components/Navbar";
import { Footer, SearchBar } from "./components";

const App = () => {
  return (
    <div className=" px-4 sm:px-[5vw} md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="salmanulfarisvnb/" element={<Home />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/about" element={<Abuot />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
