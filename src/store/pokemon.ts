import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonSpecies } from '../types';

const initialState: Array<PokemonSpecies> = [];

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        refreshPokemon: (
            state: Array<PokemonSpecies>,
            action: PayloadAction<Array<PokemonSpecies>>,
        ): Array<PokemonSpecies> => action.payload,
    },
});

export const { refreshPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
