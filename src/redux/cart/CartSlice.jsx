import { createSlice } from "@reduxjs/toolkit";

let cartData;

try {
  cartData = JSON.parse(localStorage.getItem("userCart"));
  if (!Array.isArray(cartData)) {
    cartData = [];
  }
} catch (error) {
  cartData = [];
}

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

    REMOVE: (state, action) => {
      const productId = action.payload;
      const updatedCart = state.filter((item) => item.id !== productId);
      localStorage.setItem("userCart", updatedCart);
      return updatedCart;
    },

    INC: (state, action) => {
      const products = action.payload;
      const existingProduct = state.find((item) => item.id === products);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
      localStorage.setItem("userCart", JSON.stringify(state));
    },
    DEC: (state, action) => {
      const products = action.payload;
      const existingProduct = state.find((item) => item.id === products);
      if (existingProduct) {
        existingProduct.quantity -= 1;
      }
      if(existingProduct && existingProduct.quantity === 0){
        const index = state.find((item) => item.id === products)
        state.splice(index,1);
      }
      localStorage.setItem("userCart", JSON.stringify(state));
    },
  },
});

export const { ADDTOCART, INC, DEC, REMOVE } = CartSlice.actions;
export default CartSlice.reducer;
