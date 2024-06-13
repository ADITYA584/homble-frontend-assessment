import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" flex justify-center items-center bg-green-500 text-white  p-4 h-16">
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
    </div>
  );
};

export default Nav;
