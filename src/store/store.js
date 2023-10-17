import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../actions/counter";
import { pokemonSlice } from "../actions/pokemon";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
    },
});
