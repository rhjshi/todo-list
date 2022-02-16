import { React, useState } from "react";
import TodoView from "./TodoView";


const initialTodoState = [
  {
    description: "Get milk.",
    completed: false
  },
];

// copy of model for view 
const TodoModel = props => {
  const [todos, updateTodos] = useState(initialTodoState);
  const addTodo = item => {
    const newTodos = [...todos, item];
    updateTodos(newTodos);
  }

  return (
    <TodoView
      todos={todos}
      addTodo={addTodo}
    />
  );
}

export default TodoModel;
