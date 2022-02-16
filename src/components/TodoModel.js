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
  
  return (
    <TodoView
      todos={todos}
    />
  );
}

export default TodoModel;
