import { PokemonSpecies } from '../types';

export const fetchAllPokemon = async (): Promise<Array<PokemonSpecies>> => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const body = await response.json();
    return body.results;
};
