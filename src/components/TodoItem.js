import { React, useState } from "react";
import "../App.css"

const TodoItem = props => {
  const [checked, setChecked] = useState(props.todo.completed);
  const onChangeHandler = e => {
    setChecked(e.currentTarget.checked);
    props.setCompleteTodo(props.todo.id, e.currentTarget.checked);
  };
  const onDeleteHandler = () => {
    props.deleteTodo(props.todo.id);
  }
  return (
    <div className={props.todo.completed ? "strike" : ""}>
      <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
      <span>{props.todo.description}</span>
      <button onClick={onDeleteHandler}>delete</button>
    </div>
  );
}

export default TodoItem;
