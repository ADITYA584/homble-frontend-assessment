import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h3> Welcome to Homble Frontend Assessment</h3>
      <p>Pages overview:</p>
      <ul>
        <Link to="/product">
          <li> Page 1 - Product list page and create button</li>
        </Link>
        <li>Page 2 - Product detail page</li>
        <li>Page 3 - Product dashboard</li>
      </ul>
    </div>
  );
};

export default Home;
