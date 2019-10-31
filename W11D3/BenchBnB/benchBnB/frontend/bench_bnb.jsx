import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './utils/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<Root store={store}/>, root);
});