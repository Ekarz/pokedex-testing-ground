import React from 'react';
import './App.scss';
import PokemonList from './containers/PokemonList';

const App: React.FC = () => {
    return (
        <div className="App">
            <PokemonList />{' '}
        </div>
    );
};

export default App;
