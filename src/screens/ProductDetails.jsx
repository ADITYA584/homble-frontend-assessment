import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../Components/Hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../store/cartSlice";

const ProductDetails = () => {
  const [hidden, setHidden] = useState(false);
  const [target, setTarget] = useState("");
  const { id } = useParams();
  const url = `https://frontend-assessment-server.onrender.com/api/products/${id}`;

  const { data: productData, loading, sendRequest } = useAxios();
  const dispatch = useDispatch();

  useEffect(() => {
    sendRequest(url);
  }, []);

  console.log(productData);

  return (
    <>
      {loading && <p className="text-center p-10 text-2xl">Loading ...</p>}
      {!loading && (
        <div className="grid md:grid-cols-3  gap-6 mx-4 mt-4 px-6 pt-6 ">
          <div className=" ">
            <img
              className="w-full rounded-lg "
              src={productData?.productImage}
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-xl font-bold p-3 rounded-lg  bg-slate-100">
              {productData?.name}
            </h1>

            <div className="flex flex-col gap-4 p-1  md:h-[75vh] overflow-y-auto ">
              <div className="p-2 bg-slate-100 rounded-lg h-auto">
                <p className="text-lg font-semibold ">Product Description : </p>
                <p>
                  {productData?.description}. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quisquam, quasi.
                </p>

                <p
                  className={hidden && target === "description" ? "" : "hidden"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam dignissimos in modi odio voluptates magni. Ab, ut
                  rerum laboriosam, delectus et iste possimus fugiat eius quam
                  minima necessitatibus! Molestias natus amet assumenda quod,
                  iure error delectus est sapiente incidunt sunt eos inventore
                  itaque maiores, deleniti explicabo nesciunt quo. Perspiciatis
                  magnam architecto dicta quam, dolor soluta laudantium. Beatae
                  laborum ex, aut labore natus, incidunt id porro est libero
                  soluta at similique dolor iusto sunt illo! Eligendi expedita
                  ex blanditiis vero ab, ea dicta ad magni eaque, aliquam
                  tenetur. Suscipit soluta earum sint! Consequuntur, quasi?
                  Obcaecati non delectus ad, sit cumque molestias.
                </p>
                <button
                  id="description"
                  onClick={(e) => {
                    e.preventDefault();

                    target === "description"
                      ? setHidden((prev) => !prev)
                      : setHidden(true);

                    setTarget(e.target.id);
                    // console.log(e.target.id);
                  }}
                  className="font-bold"
                >
                  Read{" "}
                  {hidden && target === "description" ? "less..." : "more..."}
                </button>
              </div>
              <div className="p-2 bg-slate-100 rounded-lg h-auto">
                <p className="text-lg font-semibold ">
                  Product Allergen Info :{" "}
                </p>
                <p>
                  {productData?.allergen_info}. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quod, ea.
                </p>

                <p
                  className={
                    hidden && target === "allergen_info" ? "" : "hidden"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam dignissimos in modi odio voluptates magni. Ab, ut
                  rerum laboriosam, delectus et iste possimus fugiat eius quam
                  minima necessitatibus! Molestias natus amet assumenda quod,
                  iure error delectus est sapiente incidunt sunt eos inventore
                  itaque maiores, deleniti explicabo nesciunt quo. Perspiciatis
                  magnam architecto dicta quam, dolor soluta laudantium. Beatae
                  laborum ex, aut labore natus, incidunt id porro est libero
                  soluta at similique dolor iusto sunt illo! Eligendi expedita
                  ex blanditiis vero ab, ea dicta ad magni eaque, aliquam
                  tenetur. Suscipit soluta earum sint! Consequuntur, quasi?
                  Obcaecati non delectus ad, sit cumque molestias.
                </p>
                <button
                  id="allergen_info"
                  onClick={(e) => {
                    e.preventDefault();
                    // console.log(e.target.id);

                    target === "allergen_info"
                      ? setHidden((prev) => !prev)
                      : setHidden(true);
                    setTarget(e.target.id);
                  }}
                  className="font-bold"
                >
                  {" "}
                  Read{" "}
                  {hidden && target === "allergen_info" ? "less..." : "more..."}
                </button>
              </div>
              <div className="p-2 bg-slate-100 rounded-lg h-auto ">
                <p className="text-lg font-semibold ">Cooking Instruction : </p>
                <p>
                  {productData?.cooking_instruction}. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Odio, incidunt.
                </p>

                <p
                  className={
                    hidden && target === "cooking_instructions" ? "" : "hidden"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam dignissimos in modi odio voluptates magni. Ab, ut
                  rerum laboriosam, delectus et iste possimus fugiat eius quam
                  minima necessitatibus! Molestias natus amet assumenda quod,
                  iure error delectus est sapiente incidunt sunt eos inventore
                  itaque maiores, deleniti explicabo nesciunt quo. Perspiciatis
                  magnam architecto dicta quam, dolor soluta laudantium. Beatae
                  laborum ex, aut labore natus, incidunt id porro est libero
                  soluta at similique dolor iusto sunt illo! Eligendi expedita
                  ex blanditiis vero ab, ea dicta ad magni eaque, aliquam
                  tenetur. Suscipit soluta earum sint! Consequuntur, quasi?
                  Obcaecati non delectus ad, sit cumque molestias.
                </p>
                <button
                  id="cooking_instructions"
                  onClick={(e) => {
                    e.preventDefault();

                    target === "cooking_instructions"
                      ? setHidden((prev) => !prev)
                      : setHidden(true);
                    setTarget(e.target.id);
                  }}
                  className="font-bold"
                >
                  Read{" "}
                  {hidden && target === "cooking_instructions"
                    ? "less..."
                    : "more..."}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {" "}
            <div className="flex items-top p-3 rounded-lg justify-around bg-slate-100 ">
              {" "}
              <p className="text-xl font-semibold ">Price</p>{" "}
              <p className="text-xl">₹{productData?.selling_price}</p>{" "}
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(
                    AddToCart({
                      cartItem: {
                        id: productData.id,
                        name: productData.name,
                        price: productData.selling_price,
                        image: productData.productImage,
                      },
                      quantity: 1,
                    })
                  );
                }}
                className="p-2  w-full bg-green-500 rounded-lg text-white text-xl"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
