import { useState } from "react";
import Header from "./Header";
import "./Tasks.css";

function Tasks() {
  const [inputValue, setInputValue] = useState();
  const [messages, setMessages] = useState(["Task 1", "Task 2", "Task 3"]);

  function handleButtonClick() {
    setMessages([...messages, inputValue]);
    setInputValue("");
  }

  return (
    <div>
      <Header>Add a Tasks</Header>

      <input
        className="input"
        type="text"
        placeholder="Create your task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="button" onClick={handleButtonClick}>
        Add Task
      </button>

      <Header>My Tasks</Header>

      <div>
        <ul>
          {messages.map((message) => {
            return <li key={message}>{message}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
