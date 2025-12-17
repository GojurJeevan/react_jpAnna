import { createSlice } from "@reduxjs/toolkit";

let cartData = JSON.parse(localStorage.getItem("userCart")) || [];

let CartSlice = createSlice({
  name: "cart",
  initialState: cartData,

  reducers: {
    ADDTOCART: (state, action) => {
      const products = action.payload;
      const existingProducts = state.find((item) => item.id == products.id);
      if (existingProducts) {
        existingProducts.quantity += 1;
      } else {
        state.push(products);
      }
      localStorage.setItem("userCart", JSON.stringify(state));
    },
  },
});

export const { ADDTOCART } = CartSlice.actions;
export default CartSlice.reducer;
