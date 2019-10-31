import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

