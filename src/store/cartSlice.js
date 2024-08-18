import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.cartItem.id === action.payload.cartItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }

      state.totalItems += 1;
      state.totalPrice += action.payload.cartItem.price;
      toast.success("Product added to cart");
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.cartItem.id === action.payload.cartItem.id
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.cartItem.id !== action.payload.cartItem.id
          );
        } else {
          existingItem.quantity -= 1;
        }

        state.totalItems -= 1;
        state.totalPrice -= action.payload.cartItem.price;
        toast.info("Product removed from cart");
      }
    },
    removeAllFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.cartItem.id === action.payload.cartItem.id
      );

      if (existingItem) {
        state.items = state.items.filter(
          (item) => item.cartItem.id !== action.payload.cartItem.id
        );
        state.totalItems -= existingItem.quantity;
        state.totalPrice -= existingItem.quantity * existingItem.cartItem.price;
        toast("Product removed from cart");
      }
    },
  },
});

export const { AddToCart, removeFromCart, removeAllFromCart } =
  CartSlice.actions;
export const cartReducer = CartSlice.reducer;
export default CartSlice;
