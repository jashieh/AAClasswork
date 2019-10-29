import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKE = 'RECEIVE_POKE';
export const CREATE_POKE = 'CREATE_POKE';

//Actions
export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePoke = poke => ({
  type: RECEIVE_POKE,
  poke
});

// export const createPoke = poke => ({
//   type: CREATE_POKE,
//   poke
// });


//Thunk actions
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPoke = (id) => (dispatch) => (
  APIUtil.fetchPoke(id)
    .then(id => dispatch(receivePoke(id)))
);

export const newPoke = (poke) => (dispatch) => (
  APIUtil.createPoke(poke) 
    .then(poke => dispatch(receivePoke(poke)))
);