import React, { useEffect, useState } from 'react';
import './index.scss';
import { Pokemon, PokemonSpecies } from '../../types';
import { fetchAllPokemon } from '../../repository/pokemon';
import capitalize from 'lodash/capitalize';

type Props = {
    selected: Pokemon | null;
    setSelected: (newSelected: Pokemon) => void;
};

const PokemonList: React.FC<Props> = ({ selected, setSelected }: Props) => {
    const [pokemonList, setPokemonList] = useState<Array<PokemonSpecies>>([]);
    useEffect(() => {
        fetchAllPokemon().then(setPokemonList);
    }, []);

    const handlePokemonClick = async (url: string): Promise<void> => {
        const response = await fetch(url);
        const body = await response.json();
        setSelected(body);
    };

    return (
        <div className="PokemonList">
            <ul>
                {pokemonList.map((pokemon) => (
                    <li
                        key={pokemon.name}
                        className={selected?.name === pokemon.name ? 'selected' : ''}
                        onClick={(): Promise<void> => handlePokemonClick(pokemon.url)}
                    >
                        {capitalize(pokemon.name)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
