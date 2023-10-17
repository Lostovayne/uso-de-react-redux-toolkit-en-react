import { setPokemons, startLoadingPOkemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPOkemons());

        // realizar fetch
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
        );
        const data = await response.json();
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    };
};
