import { RECEIVE_ALL_POKEMON, RECEIVE_POKE, CREATE_POKE } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = null;

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      // newState = Object.assign({}, state);
      
      // Object.keys(action.pokemon).forEach( id => {
      //   newState[id] = action.pokemon[id];
      // });

      newState = action.pokemon;
      return newState;
    case RECEIVE_POKE:
      newState = action.poke.pokemon;
      return newState;
    default:
      return state;  
  }
};  

export default pokemonReducer;