import React from "react";
import { createPortal } from "react-dom";

const ProductCard = ({
  name,
  description,
  allergen_info,
  cooking_instruction,
  cost_price,
  selling_price,
  productImage,
  id,
}) => {
  return (
    <div id={id} className="  shadow-md p-2 max-w-[23.125rem]">
      <div className="">
        <img
          className="rounded-[16px]  "
          src={productImage}
          alt="productImage"
        />
      </div>
      <div className="p-2 text-lg">
        <div className="flex justify-between ">
          <p className="font-bold ">{name}</p>
          <div className="">
            <span className="font-semibold pr-2">₹{selling_price}</span>
            <span className="text-[12.8px] text-center ">₹{cost_price}</span>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold">Description: </span> {description}
          .
        </div>
        <div>
          <span className="text-sm font-bold">Allergen: </span>
          {allergen_info}.
        </div>
        <div>
          <span className="text-sm font-bold">Cooking Instruction: </span>
          {cooking_instruction}.
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
