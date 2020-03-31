import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonSpecies } from '../types';
import { AppThunk } from './index';
import { fetchAllPokemon } from '../repository/pokemon';

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

export const fetchPokemonList = (): AppThunk => async (dispatch): Promise<void> => {
    let pokemonList;
    try {
        pokemonList = await fetchAllPokemon();
    } catch (e) {
        console.error(e);
        return;
    }
    dispatch(refreshPokemon(pokemonList));
};

export default pokemonSlice.reducer;
