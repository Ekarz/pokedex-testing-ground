import React from 'react';
import { Pokemon } from '../../types';
import capitalize from 'lodash/capitalize';

type Props = {
    pokemon: Pokemon;
};

const PokemonInfo: React.FC<Props> = ({ pokemon }: Props) => {
    return (
        <div className="PokemonInfo">
            <h2>{capitalize(pokemon.name)}</h2>
        </div>
    );
};

export default PokemonInfo;
