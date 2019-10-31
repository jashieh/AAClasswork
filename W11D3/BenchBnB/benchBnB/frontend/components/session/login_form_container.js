import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './signup_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  Login: formUser => dispatch(signup(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

