import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

