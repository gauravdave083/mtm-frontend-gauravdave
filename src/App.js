import React, { useState } from "react";
import TaskInput from './TaskInput';
import TasksList from './TasksList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState({ index: null, text: '' });

  // Function to add 
  const addTask = (text) => {
    if (text.trim()) { // Check for empty tasks
      setTasks([...tasks, { text, completed: false }]);
    } else {
      alert('Please enter a task description.');
    }
  };

  // Function to update
  const updateTask = (index, newText) => {
    setTasks(
      tasks.map((task, i) => (i === index ? { ...task, text: newText } : task))
    );
    setEditMode({ index: null, text: '' });
  };

  // Function to delete
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Function to manage
  const editTask = (index, text) => {
    setEditMode({ index, text });
  };

  return (
    <div className="App">
      <h1>Lets Plan Your Trip</h1>
      <TaskInput addTask={addTask} />
      <TasksList
        tasks={tasks}
        editMode={editMode}
        updateTask={updateTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;

