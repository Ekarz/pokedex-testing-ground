import React from 'react';
import './index.scss';
import { Pokemon } from '../../types';
import capitalize from 'lodash/capitalize';
import StatInfo from './StatInfo';

type Props = {
    pokemon: Pokemon;
};

const PokemonInfo: React.FC<Props> = ({ pokemon }: Props) => {
    return (
        <div className="PokemonInfo">
            <h2>
                #{pokemon.id} {capitalize(pokemon.name)}
            </h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <ul>
                {pokemon.stats.map((stat) => (
                    <StatInfo stat={stat} key={stat.stat.name} />
                ))}
            </ul>
        </div>
    );
};

export default PokemonInfo;
