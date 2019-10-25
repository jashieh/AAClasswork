import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import rootReducer from '../frontend/reducers/root_reducer';
import * as todoActions from '../frontend/actions/todo_actions';
import App from '../frontend/components/app';
import Root from '../frontend/components/root';
import allTodos from '../frontend/reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveTodos = todoActions.receiveTodos;
  window.receiveTodo = todoActions.receiveTodo;
  window.removeTodo = todoActions.removeTodo;
  window.allTodos = allTodos;

  ReactDOM.render(< Root store={store}/>, root);
});