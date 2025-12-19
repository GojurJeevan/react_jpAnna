import { configureStore } from "@reduxjs/toolkit";
import counterExample from "./CounterExample/CounterSlice";
import cartData from "./cart/CartSlice"
import productOper from "./Cards/cardsAPISlice"

export default configureStore({
  reducer: {
    counter: counterExample,
    cart: cartData,
    products: productOper
  },
});


