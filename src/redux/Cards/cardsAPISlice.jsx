import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let api = "https://dummyjson.com/products";

let cardsAPISlice = createSlice({
    name:'productsAPI',
    initialState:[],

    reducers:{
        data : async function apiData() {
            
        }
    }
})

export const {data} = cardsAPISlice.actions;
export default cardsAPISlice.reducer;