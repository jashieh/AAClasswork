import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from "react-router-dom";
import PokemonDetail from './pokemon/pokemon_detail';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({store}) => (
  <Provider store={store}>
    <h1>Pokedex</h1>
    <HashRouter>
      <Route exact path="/" component={PokemonIndexContainer} />
      <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
    </HashRouter>
  </Provider>
);

export default Root;