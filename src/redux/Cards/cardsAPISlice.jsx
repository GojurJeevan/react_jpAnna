import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let cardsAPISlice = createSlice({
  name: "productsAPI",
  initialState: [],

  reducers: {
    setProducts: (state, action) => action.payload,
  },
});


export const a = async function productsData() {
    const {data} = await axios.get("https://dummyjson.com/products");
    console.log(data.products);
  setProducts(data.products);
}

export const { setProducts } = cardsAPISlice.actions;
export default cardsAPISlice.reducer;
