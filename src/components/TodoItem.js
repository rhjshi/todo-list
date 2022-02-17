import { React, useState } from "react";
import "../App.css"

const TodoItem = props => {
  const [checked, setChecked] = useState(props.todo.completed);
  const onChangeHandler = e => {
    setChecked(e.currentTarget.checked);
    props.setCompleteTodo(props.todo.id, e.currentTarget.checked);
  };
  return (
    <div className={props.todo.completed ? "strike" : ""}>
      <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
      {props.todo.description}
      <button />
    </div>
  );
}

export default TodoItem;
