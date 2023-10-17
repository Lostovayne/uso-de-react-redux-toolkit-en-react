import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPOkemons: (state /* action */) => {
            state.isLoading = true;
        },

        setPokemons: (state, action) => {
            state.pokemons = action.payload.pokemons;
            state.page = action.payload.page;
            state.isLoading = false;
        },
    },
});

export const { startLoadingPOkemons, setPokemons } = pokemonSlice.actions;
