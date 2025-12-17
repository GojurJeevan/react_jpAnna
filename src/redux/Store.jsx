import { configureStore } from "@reduxjs/toolkit";
import counterExample from "./CounterExample/CounterSlice";
import fetchProducts from "./Cards/cardsAPISlice";

export const Store = configureStore({
  reducer: {
    counter: counterExample,
    products: fetchProducts,
  },
});
