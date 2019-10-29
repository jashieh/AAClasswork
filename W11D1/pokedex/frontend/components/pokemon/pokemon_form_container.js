import { connect } from 'react-redux';
import { newPoke } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

// const mapStateToProps = state => ({
//   pokemon: selectAllPokemon(state)
// });

const mapDispatchToProps = dispatch => ({
  newPoke: (poke) => dispatch(newPoke(poke))
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);