import { configureStore } from "@reduxjs/toolkit";
import counterExample from "./CounterExample/CounterSlice";

export const Store = configureStore({
    reducer:{
        counter : counterExample
    }
})

