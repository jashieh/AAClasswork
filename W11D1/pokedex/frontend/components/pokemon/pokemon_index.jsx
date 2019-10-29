import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
      <ul>
        {pokemon.map(poke => (
          <PokemonIndexItem key={poke.id} pokemon={poke} />
        ))}
      </ul>
    );
  }
}