
const allTodos = (state) => {
  return Object.keys(state.todos).map( (id) => (state.todos[id]));
};

export default allTodos;