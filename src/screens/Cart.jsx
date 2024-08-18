import React from "react";
import { useSelector } from "react-redux";
import CartItemCard from "../Components/CartItemCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className=" flex item-center justify-center w-full p-3 ">
      {cart.totalItems === 0 ? (
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-center">Your cart is empty</p>
          <p>
            Please Explore
            <Link
              className="font-semibold italic text-indigo-700  "
              to={"/product"}
            >
              {" "}
              " Product Page "
            </Link>
          </p>
        </div>
      ) : (
        <div className="max-w-[500px] w-full flex flex-col gap-2 rounded-lg">
          <h1 className="text-3xl font-bold text-center bg-slate-100 p-2 rounded-t-lg">
            Product Cart
          </h1>

          <div className="flex flex-col gap-2 border-2  rounded-lg">
            {cart.items.map((item) => {
              if (item.quantity === 0) {
                return null;
              }
              return (
                <CartItemCard
                  product={item}
                  name={item.cartItem.name}
                  img={item.cartItem.image}
                  quantity={item.quantity}
                  price={item.cartItem.price}
                />
              );
            })}
          </div>

          <div className="flex justify-between px-2 gap-2">
            <p className="font-semibold text-xl">
              Total Price: ₹{cart.totalPrice}
            </p>
            <p className="font-semibold text-xl">
              Total items: {cart.totalItems}
            </p>
          </div>
          <div>
            <Link to="/checkout">
              <button className="bg-green-500 text-white p-2 rounded-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
