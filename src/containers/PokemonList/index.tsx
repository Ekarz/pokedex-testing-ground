import React, { useEffect } from 'react';
import './index.scss';
import { Pokemon } from '../../types';
import { fetchAllPokemon } from '../../repository/pokemon';
import capitalize from 'lodash/capitalize';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { refreshPokemon } from '../../store/pokemon';

type Props = {
    selected: Pokemon | null;
    setSelected: (newSelected: Pokemon) => void;
};

const PokemonList: React.FC<Props> = ({ selected, setSelected }: Props) => {
    const dispatch = useDispatch();

    const pokemonList = useSelector((state: RootState) => state.pokemon);
    useEffect(() => {
        fetchAllPokemon().then((res) => dispatch(refreshPokemon(res)));
    }, [dispatch]);

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
