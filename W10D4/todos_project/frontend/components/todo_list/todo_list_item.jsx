import React from 'react';

const TodoListItem = (props) => {
  return (
    <div>
      <li key={props.props.id}>{props.props.title}</li>
      {console.log(props)}
      <button onClick = { () =>  props.removeTodo(props.props)}> Delete </button>
    </div>
  );
};

export default TodoListItem;