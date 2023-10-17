/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./actions/pokemon";
import { PokemonList } from "./PokemonList";

export const PokemonApp = () => {
    const dispatch = useDispatch();

    // tomar el estado de redux
    const { page, pokemons, isLoading } = useSelector(
        (state) => state.pokemons
    );

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <div className="container">
            <div>
                <h1>PokemonApp</h1>
                <hr />
                {isLoading ? (
                    <span>Loading...</span>
                ) : (
                    <PokemonList pokemons={pokemons} />
                )}

                <button
                    disabled={isLoading}
                    onClick={() => dispatch(getPokemons(page))}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};
