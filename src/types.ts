export interface Pokemon {
    id: number;
    name: string;
    species: PokemonSpecies;
    sprites: { front_default: string };
    stats: Array<Stat>;
}

export type Stat = {
    base_stat: number;
    effort: 0 | 1 | 2 | 3;
    stat: {
        name: 'speed' | 'special-defense' | 'special-attack' | 'defense' | 'attack' | 'hp';
    };
};

export type PokemonSpecies = {
    name: string;
    url: string;
};
