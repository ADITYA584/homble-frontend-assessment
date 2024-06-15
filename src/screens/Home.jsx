import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h3> Welcome to Homble Frontend Assessment</h3>
      <p>Pages overview:</p>
      <ul>
        <Link to="/product">
          <li>
            {" "}
            Page 1 - Product list page and create button{" "}
            <span className="text-green-500 font-bold">Completed</span>
          </li>
        </Link>
        <li>
          Page 2 - Product detail page{" "}
          <span className="text-green-500 font-bold"> Completed</span>
        </li>
        <li>
          Page 3 - Product dashboard{" "}
          <span className="text-green-500 font-bold">Completed</span>
        </li>
      </ul>
    </div>
  );
};

export default Home;
