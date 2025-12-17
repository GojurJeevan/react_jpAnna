import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let cardsAPISlice = createSlice({
  name: "productsAPI",
  initialState: "https://dummyjson.com/products",
  reducers: {
    setProducts: (state, action) => axios.get({state})
  },
});

export const { setProducts } = cardsAPISlice.actions;
export default cardsAPISlice.reducer;
