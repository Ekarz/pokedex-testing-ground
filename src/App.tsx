import React, { useState } from 'react';
import './App.scss';
import PokemonList from './containers/PokemonList';
import PokemonInfo from './containers/PokemonInfo';
import { Pokemon } from './types';

const App: React.FC = () => {
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

    return (
        <div className="App">
            <PokemonList selected={selectedPokemon} setSelected={setSelectedPokemon} />
            {selectedPokemon && <PokemonInfo pokemon={selectedPokemon} />}
        </div>
    );
};

export default App;
