import React from 'react';
import './App.css';

function TasksList({ tasks, editMode, updateTask, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li className="li" key={index}>
          {editMode.index === index ? (
            <input
              type="text"
              value={editMode.text}
              onChange={(e) => editTask(index, e.target.value)}
              onBlur={() => updateTask(index, editMode.text)} // Update on blur
            />
          ) : (
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
          )}
          <button onClick={() => editTask(index, task.text)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
