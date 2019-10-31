import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
}); 

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS
});

export const login = (formUser) => (dispatch) => (APIUtil.login(formUser)
  .then(user => dispatch(receiveCurrentUser(user))));

export const logout = () => (dispatch) => (APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser())));

export const signup = (formUser) => (dispatch) => (APIUtil.signup(formUser)
  .then(user => dispatch(receiveCurrentUser(user))));