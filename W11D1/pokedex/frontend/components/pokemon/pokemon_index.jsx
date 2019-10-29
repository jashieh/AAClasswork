import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonFormContainer from './pokemon_form_container';

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
        <PokemonFormContainer /> 
        {pokemon.map(poke => (
          <PokemonIndexItem key={poke.id} poke={poke} />
        ))}
      </ul>
    );
  }
}