import { React, useState } from "react";
import "../App.css";

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
    <div className="item">
      <div className="ui segment todo-item">
        <div className="ui checkbox center-aligned">
          <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
          <label 
            style={{fontSize: "1.2rem"}}
            className={props.todo.completed ? "strike" : ""}
          >
            {props.todo.description}
          </label>
        </div>
        <div>    
          <button className="compact ui icon button" onClick={onDeleteHandler}>
            <i className="trash icon"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
