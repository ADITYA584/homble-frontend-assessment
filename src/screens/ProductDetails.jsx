import React from "react";
import { Outlet, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      {id}
      <Outlet />
    </div>
  );
};

export default ProductDetails;
