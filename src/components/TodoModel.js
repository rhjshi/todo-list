import { React, useState } from "react";
import TodoView from "./TodoView";

const TODO_KEY = 'todos';

const updateToLocalStorage = todos => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

const getFromLocalStorage = () => {
  const todoStr = localStorage.getItem(TODO_KEY);
  if (!todoStr) return [];

  return JSON.parse(todoStr);
}

// copy of model for view 
const TodoModel = props => {
  const [todos, updateTodos] = useState(getFromLocalStorage());
  
  const updateModel = todos => {
    updateToLocalStorage(todos);
    updateTodos(todos);
  };

  const addTodo = desc => {
    const item = {
      id: Date.now(),
      description: desc,
      completed: false
    };
    const newTodos = [...todos, item];
    updateModel(newTodos);
  };

  const setCompleteTodo = (id, completed) => {
    todos.forEach(item => {
      if (item.id !== id) return;
      item.completed = completed;
    });
    updateModel([...todos]);
  };

  const deleteTodo = id => {
    updateModel(todos.filter(item => item.id !== id));
  };

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
