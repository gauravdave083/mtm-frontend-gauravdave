import React, { useState } from "react";
import './App.css';

function TaskInput({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="input"
        type="text"
        placeholder="Add a Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;

