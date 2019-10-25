import React from "react";
import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        <h3>Todo List goes here!</h3>
        {props.todos.map( todo => {
          return <TodoListItem props={todo} removeTodo={props.removeTodo} />;
        })}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}  />
    </div>
  );
}

export default TodoList;