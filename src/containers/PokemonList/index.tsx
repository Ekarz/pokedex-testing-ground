import React, { useEffect, useState } from 'react';
import { PokemonPresentation } from '../../types';
import { fetchAllPokemon } from '../../repository/pokemon';

const PokemonList: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Array<PokemonPresentation>>([]);
    useEffect(() => {
        fetchAllPokemon().then(setPokemonList);
    }, []);

    return (
        <div className="PokemonList">
            <ul>
                {pokemonList.map(({ name }) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
