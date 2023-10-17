import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../actions/counter";
import { pokemonSlice } from "../actions/pokemon";
import { todosApi } from "../apis";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        //*RTK

        [todosApi.reducerPath]: todosApi.reducer,
    },

    //*RTK

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});
