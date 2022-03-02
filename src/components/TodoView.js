import { React } from "react";
import "../App.css";
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
    <div className="">
      <h1 className="ui header">To-Do List</h1>
      <EntryBar addTodo={props.addTodo}/>
      
      <div className="ui relaxed list">
        {todoList}
      </div>
    </div>
  );
}

export default TodoView;
