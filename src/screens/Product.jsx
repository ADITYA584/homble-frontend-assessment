import React, { useEffect, useState } from "react";
import { getRequest } from "../axios";
import ProductCard from "../Components/ProductCard";
import Modal from "../Components/Modal";
import { createPortal } from "react-dom";
import Skeleton from "../Components/Skeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Product = () => {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await getRequest("/products");
        setProductsData(response.data);
        setLoading(false);
        // console.log(response);
      } catch (error) {
        toast.error(error.message);
        setLoading(false);
        setError(error);
      }
    };
    FetchData();
  }, []);

  const compareSort = (a, b) => {
    return a.selling_price - b.selling_price;
  };

  const ModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center">
      {showModal &&
        createPortal(
          <Modal closeModal={ModalClose} />,
          document.getElementById("root")
        )}
      <div>
        <button
          onClick={() => setShowModal(true)}
          className=" p-2 m-2 bg-green-500 rounded-lg text-white text-xl"
        >
          Add Product
        </button>
      </div>

      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-8">
        {loading &&
          Array(10)
            .fill(0)
            .map((_, index) => <Skeleton key={index} />)}
        {productsData.sort(compareSort).map((product, index) => {
          return (
            <Link to={`/product/${product.id}`}>
              <ProductCard
                key={index}
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
          );
        })}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Product;
