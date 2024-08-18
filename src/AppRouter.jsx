import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Nav from "./Components/Nav";
import Dashboard from "./screens/Dashboard";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import CheckoutPage from "./screens/Checkout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product">
          <Route index element={<Product />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
