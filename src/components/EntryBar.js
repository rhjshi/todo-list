import React, { useState } from "react";

const EntryBar = props => {
  const [userInput, setUserInput] = useState("");
  
  const onSubmitHandler = e => {
    e.preventDefault();
    if (userInput.trim() === "") return;

    props.addTodo(userInput.trim());
    setUserInput("");
  }

  const onChangeHandler = e => {
    setUserInput(e.currentTarget.value);
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="ui left icon input">
          <input 
            type="text" 
            placeholder="Add a task ..."
            value={userInput}
            onChange={onChangeHandler}
          />
          <i className="tasks icon"/>
        </div>
      </form>
    </div>
  );
}

export default EntryBar;
