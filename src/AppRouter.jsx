import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Nav from "./Components/Nav";
import Dashboard from "./screens/Dashboard";
import ProductDetails from "./screens/ProductDetails";

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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
