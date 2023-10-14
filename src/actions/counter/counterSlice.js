import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 10,
    },
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            if (state.counter > 0) state.counter--;
            return state;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;
