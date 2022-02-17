import { React, useState } from "react";
import TodoView from "./TodoView";


const initialTodoState = [
  {
    id: Date.now(),
    description: "Get milk.",
    completed: false
  },
];

// copy of model for view 
const TodoModel = props => {
  const [todos, updateTodos] = useState(initialTodoState);
  const addTodo = desc => {
    const item = {
      id: Date.now(),
      description: desc,
      completed: false
    };
    const newTodos = [...todos, item];
    updateTodos(newTodos);
  }
  const setCompleteTodo = (id, completed) => {
    todos.forEach(item => {
      if (item.id !== id) return;
      item.completed = completed;
    });
    updateTodos([...todos]);
  }
  const deleteTodo = id => {
    updateTodos(todos.filter(item => item.id !== id));
  }

  return (
    <TodoView
      todos={todos}
      addTodo={addTodo}
      setCompleteTodo={setCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default TodoModel;
