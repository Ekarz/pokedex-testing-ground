import React, { useEffect, useState } from 'react';
import './index.scss';
import { PokemonPresentation } from '../../types';
import { fetchAllPokemon } from '../../repository/pokemon';
import capitalize from 'lodash/capitalize';

const PokemonList: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Array<PokemonPresentation>>([]);
    useEffect(() => {
        fetchAllPokemon().then(setPokemonList);
    }, []);

    return (
        <div className="PokemonList">
            <ul>
                {pokemonList.map(({ name }) => (
                    <li key={name}>{capitalize(name)}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
