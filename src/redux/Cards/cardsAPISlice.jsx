import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = axios.get("https://dummyjson.com/products")
console.log(data.products);

let cardsAPISlice = createSlice({
  name: "productsAPI",
  initialState: data,
  reducers: {
    setProducts: (state, action) => axios.get()
  },
});

export const { setProducts } = cardsAPISlice.actions;
export default cardsAPISlice.reducer;
