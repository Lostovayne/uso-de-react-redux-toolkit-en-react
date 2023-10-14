import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../actions/counter";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});
