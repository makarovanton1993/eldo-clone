import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface cartState {
  cartItems: object[]
}

// Initial state
const initialState: cartState = {
  cartItems: [],
};

// Actual Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart(state, action) {
      // const item = state.cartItems.find(item => { item.id === action.payload.id });
    },

  },
});

export const { addItemCart } = cartSlice.actions;

export const allCartItems = (state: AppState) => state.cart.cartItems;

export default cartSlice.reducer;