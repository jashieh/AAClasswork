import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds, updateFilter } from '../../actions/filter_actions'; 

const asArray = ({ benches }) => (
    Object.keys(benches).map(key => benches[key])
);

const mapStateToProps = state => ({
    benches: asArray(state.entities)
    // benches: state.entities.benches
});

const mapDispatchToProps = dispatch => ({
    fetchBenches: (filter) => dispatch(fetchBenches(filter)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter,value))
});

export default connect(mapStateToProps,mapDispatchToProps)(Search);