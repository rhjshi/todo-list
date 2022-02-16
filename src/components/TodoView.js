import { React } from "react";
import EntryBar from "./EntryBar";
import TodoItem from "./TodoItem";

const TodoView = props => {
  const todoList = props.todos.map(item =>
    <TodoItem 
      description={item.description}
      completed={item.completed}
    />
  )
  return (
    <div>
      <h1>To-Do List</h1>
      <EntryBar/>
      {todoList}
    </div>
  );
}

export default TodoView;
