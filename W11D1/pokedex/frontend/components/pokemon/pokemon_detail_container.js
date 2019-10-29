import { connect } from 'react-redux';
import { requestPoke } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
  // poke: state.poke[ownProps.match.params.id]
  poke: state.entities.pokemon,
  items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
  requestPoke: (poke) => dispatch(requestPoke(poke))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
