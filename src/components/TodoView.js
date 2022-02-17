import { React } from "react";
import EntryBar from "./EntryBar";
import TodoItem from "./TodoItem";

const TodoView = props => {
  const todoList = props.todos.map(item =>
    <TodoItem
      key={item.id} 
      todo={item}
      setCompleteTodo={props.setCompleteTodo}
      deleteTodo={props.deleteTodo}
    />
  )
  return (
    <div>
      <h1>To-Do List</h1>
      <EntryBar addTodo={props.addTodo}/>
      {todoList}
    </div>
  );
}

export default TodoView;
