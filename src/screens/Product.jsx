import React, { useEffect, useState } from "react";
import { getRequest } from "../axios";
import ProductCard from "../Components/ProductCard";
import Modal from "../Components/Modal";
import { createPortal } from "react-dom";
import Skeleton from "../Components/Skeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import useAxios from "../Components/Hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../store/cartSlice";

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { data: productsData, loading, error, sendRequest } = useAxios();

  useEffect(() => {
    sendRequest("https://frontend-assessment-server.onrender.com/api/products");
  }, []);

  const compareSort = (a, b) => {
    return a.selling_price - b.selling_price;
  };

  const ModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-8">
        {loading &&
          Array(10)
            .fill(0)
            .map((_, index) => <Skeleton key={index} />)}
        {productsData?.sort(compareSort).map((product, index) => {
          return (
            <div key={index}>
              <Link to={`/product/${product.id}`}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  allergen_info={product.allergen_info}
                  cooking_instruction={product.cooking_instruction}
                  cost_price={product.cost_price}
                  selling_price={product.selling_price}
                  productImage={product.productImage}
                  id={product.id}
                />
              </Link>
              <button
                onClick={() => {
                  const temp = {
                    cartItem: {
                      id: product.id,
                      name: product.name,
                      price: product.selling_price,
                      image: product.productImage,
                    },
                    quantity: 1,
                  };
                  dispatch(AddToCart(temp));

                  console.log(cart.items);
                }}
                className="w-full text-white font-semibold p-2 bg-green-500 rounded-lg "
              >
                Add to Cart
              </button>
            </div>
          );
        })}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Product;
