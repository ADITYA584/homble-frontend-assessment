import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { postRequest } from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ closeModal }) => {
  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [productAllergen, setProductAllergen] = useState("");
  const [error, setError] = useState(false);

  const product_name = useRef("");
  const detail_ref = useRef("");
  const allergen_ref = useRef(false);

  const notify = (data) => toast.success(data);

  const sendData = async () => {
    const data = {
      product_name: { productName },
      product_detail: { productDetail },
      allergen_info: { productAllergen },
    };
    try {
      const res = await postRequest("/products", JSON.stringify(data));
      notify(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  // called on form submit
  const submitHandler = async (e) => {
    e.preventDefault();
    if (product_name.current.value.trim() !== "") {
      setProductName(product_name.current.value);
    } else {
      setError(true);
      return;
    }

    if (detail_ref.current.value.trim() !== "")
      setProductDetail(detail_ref.current.value);
    else {
      setError(true);
      return;
    }
    if (allergen_ref.current.value.trim() !== "")
      setProductAllergen(allergen_ref.current.value);
    else {
      setError(true);
      return;
    }

    // function to post the data on the /products endpoint
    sendData();
    // console.log(product_name.current.value);
    // console.log(allergen_ref.current.value);
    // console.log(detail_ref.current.value);
    product_name.current.value = "";
    detail_ref.current.value = "";
    allergen_ref.current.value = "";
  };

  return (
    <div className="fixed flex justify-center items-center top-0 w-full h-[100vh] z-400 bg-[#00000099]">
      <ToastContainer />
      <div className=" relative flex flex-col rounded-lg p-10 gap-5 sm:w-[400px] text-lg bg-slate-300 h-[400px] justify-center items-center">
        <button onClick={closeModal} className="absolute top-3 right-3">
          <CloseIcon />
        </button>
        <p className="text-2xl font-bold">Enter product details </p>

        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold" htmlFor="Productname">
              Product name
            </label>
            <input
              onFocus={() => {
                setError(false);
              }}
              ref={product_name}
              className={`p-2 text-base outline-[#24a0ed] rounded-lg ${
                error ? "outline-red-500" : ""
              } "
              type="text`}
              id="Productname"
              placeholder="Enter Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold" htmlFor="productdetails">
              Product Description
            </label>
            <input
              onFocus={() => {
                setError(false);
              }}
              ref={detail_ref}
              className={`p-2 text-base ${
                !error ? "border-red-500" : ""
              } outline-[#24a0ed] rounded-lg`}
              type="text"
              id="Productdetail"
              placeholder="Enter Description"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-semibold" htmlFor="Allergin">
              Product Allegen
            </label>
            <input
              onFocus={() => {
                setError(false);
              }}
              ref={allergen_ref}
              className="p-2 text-base rounded-lg outline-[#24a0ed] border-none "
              type="text"
              id="Allergin"
              placeholder="Enter Allergen Info"
            />
          </div>
          {error && (
            <p className="text-center text-red-500 text-sm font-semibold ">
              Please enter valid Details
            </p>
          )}
          <button
            className="w-full p-2 bg-[#24a0ed] text-white font-semibold rounded-lg"
            type="submit"
          >
            {" "}
            Add Product{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
