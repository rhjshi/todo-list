import React, { useState } from "react";

const EntryBar = props => {
  const [userInput, setUserInput] = useState("");
  
  const onSubmitHandler = e => {
    e.preventDefault();
    if (userInput === "") return;

    props.addTodo(userInput);
    setUserInput("");
  }

  const onChangeHandler = e => {
    setUserInput(e.currentTarget.value);
  }

  return (
    <div className="ui input">
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
