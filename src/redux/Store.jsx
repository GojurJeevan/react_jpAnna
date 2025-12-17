import { configureStore } from "@reduxjs/toolkit";
import counterExample from "./CounterExample/CounterSlice";
import cartData from "./cart/CartSlice"

export default configureStore({
  reducer: {
    counter: counterExample,
    cart: cartData,
  },
});


