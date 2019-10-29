import { RECEIVE_POKE } from '../actions/pokemon_actions';


const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = null;

  switch(action.type) {
    case RECEIVE_POKE:
      newState = action.poke.items;
      return newState;
    default:
      return state;
  }
};

export default itemReducer;