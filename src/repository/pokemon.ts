import { PokemonPresentation } from '../types';

export const fetchAllPokemon = async (): Promise<Array<PokemonPresentation>> => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const body = await response.json();
    return body.results;
};
