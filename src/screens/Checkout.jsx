import React from "react";
import { useSelector } from "react-redux";
import { Close } from "@mui/icons-material";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Information */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="state"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="zip">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zip"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.items.map((item) => {
              return (
                <div className="flex justify-between font-bold">
                  <div className="flex gap-4 items-center justify-center">
                    <span>{item.cartItem.name}</span>
                    <span className="flex items-center ">
                      <Close
                        sx={{
                          fontSize: 16,
                        }}
                      />
                    </span>
                    <span>{item.quantity}</span>
                  </div>

                  <span> ₹{item.cartItem.price * item.quantity}</span>
                </div>
              );
            })}
            <div className="flex justify-between border-t pt-4 font-bold">
              <span>Total</span>
              <span> ₹{cart.totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="p-6 bg-white rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="card-name"
              >
                Cardholder Name
              </label>
              <input
                type="text"
                id="card-name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="card-number"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="expiry-date"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry-date"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <button className="mt-8 w-full max-w-sm px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
