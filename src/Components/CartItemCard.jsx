import React from "react";
import { Remove, Add, DeleteOutlineOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  AddToCart,
  removeAllFromCart,
} from "../store/cartSlice";

const CartItemCard = ({ product, img, name, quantity, price }) => {
  const dispatch = useDispatch();

  if (quantity === 0) {
    return null;
  }
  return (
    <div className="grid grid-cols-3 p-2">
      <div className="flex items-center justify-center w-full max-w-[100px] sm:h-[75px] overflow-hidden rounded-md sm:shadow-lg  ">
        <img src={img} alt="product" />
      </div>
      <div className="col-span-2 flex flex-col sm:flex-row border-l-2">
        <div className="sm:w-[70%] p-2 flex flex-col gap-2 font-semibold">
          <div>
            <p>{name}</p>
          </div>

          <div className="flex justify-between  font-bold items-center gap-3	">
            <div className="flex border  gap-2">
              <button
                onClick={() => {
                  dispatch(removeFromCart(product));
                }}
                className=" bg-slate-200 flex items-center justify-center"
              >
                <Remove />
              </button>
              <span className="font-bold ">{quantity}</span>
              <button
                onClick={() => {
                  dispatch(AddToCart(product));
                }}
                className="flex items-center justify-center bg-slate-200"
              >
                <Add />
              </button>
            </div>
            <div className="">
              <button>
                <DeleteOutlineOutlined
                  onClick={() => {
                    dispatch(removeAllFromCart(product));
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col sm:items-start justify-between w-full sm:justify-center gap-2 sm:border-l-2 p-2 sm:w-[30%]">
          <p className="text-nowrap">
            <span className="font-bold">Price :</span>{" "}
            <span className="font-semibold">₹{price}</span>
          </p>
          <p className="text-nowrap">
            <span className="font-bold">Total :</span>{" "}
            <span className="font-semibold">₹{price * quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
