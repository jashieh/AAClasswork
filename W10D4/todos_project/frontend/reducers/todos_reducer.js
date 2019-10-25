import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  let nextState = null;

  switch (action.type) {
    case (RECEIVE_TODOS):
      const newState = {};
      // iterate through
      action.todos.forEach( todo => {
        newState[todo.id] = todo;
      });
      return newState;
    case (RECEIVE_TODO):
      nextState = Object.assign({}, state);
      nextState[action.todo.id] = action.todo;
      return nextState;
    case (REMOVE_TODO):
      nextState = Object.assign({}, state);
      // nextState is an object containing 
      delete nextState[action.todo.id]; 
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;