import React, { useState } from "react";

const EntryBar = props => {
  const [userInput, setUserInput] = useState("");
  
  const onSubmitHandler = e => {
    e.preventDefault();
    if (userInput === "") return;

    const todo = {
      description: userInput,
      completed: false,
    }
    props.addTodo(todo);
    setUserInput("");
  }

  const onChangeHandler = e => {
    setUserInput(e.currentTarget.value);
  }

  return (
    <div class="ui input">
      <form onSubmit={onSubmitHandler}>
        <input 
          type="text" 
          placeholder="What to do?"
          value={userInput}
          onChange={onChangeHandler}
        />
      </form>
    </div>
  );
}

export default EntryBar;
