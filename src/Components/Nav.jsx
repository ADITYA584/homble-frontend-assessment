import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className=" flex justify-between items-center bg-green-500 text-white  p-4 h-16">
      <ul className=" flex justify-center sm:gap-20 sm:text-2xl ">
        <Link to="/">
          <button className="p-2 rounded-lg hover:translate-y-1 duration-300">
            Home
          </button>
        </Link>
        <Link to="/product">
          <button className="p-2 rounded-lg hover:translate-y-1 duration-300 ">
            Product List
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="p-2 rounded-lg hover:translate-y-1 duration-300">
            Dashboard
          </button>
        </Link>
      </ul>
      <Link to="/cart">
        <button className="p-2 rounded-lg hover:translate-y-1 duration-300 relative">
          {cart.totalItems > 0 && (
            <div className="w-4 h-4 bg-red-500 text-[12px] flex items-center justify-center rounded-full absolute top-1 right-1">
              {cart.totalItems}
            </div>
          )}
          <ShoppingCart sx={{ fontSize: 30 }} />
        </button>
      </Link>
    </div>
  );
};

export default Nav;
