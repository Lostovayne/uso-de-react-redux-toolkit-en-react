import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 10,
        times: 0,
    },
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            if (state.counter > 0) state.counter--;
            return state;
        },
        incrementBy: (state, action) => {
            console.log(action.payload);
            state.counter += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions;
