import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
    name:'counter',
    initialState:0,

    reducers:{
        INC: (state,action)=> state+1,
        DEC: (state,action)=> state-1,
        RESET: (_state,action)=> 0,
    }
})

export const {INC,DEC,RESET} = CounterSlice.actions;
export default CounterSlice.reducer;