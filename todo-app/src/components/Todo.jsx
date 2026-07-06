import React, { useState } from "react";

function Todo() {

  // State for storing tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete Assignment 5",
      completed: false,
    },
  ]);

  // State for input field
  const [newTask, setNewTask] = useState("");

  // Update input field
  const handleChange = (event) => {
    setNewTask(event.target.value);
    console.log(event.target.value);
  };

  // Add new task
  const handleAdd = () => {

    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);

    setNewTask("");
  };

  // Mark task complete/incomplete
  const handleCheck = (id) => {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;

    });

    setTasks(updatedTasks);
  };

  // Delete task
  const handleDelete = (id) => {

    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);

  };

  return (

    <div className="container">

      <h1>To Do List</h1>

      <div className="input-area">

        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>Add</button>

      </div>

      <ul>

        {tasks.map((task) => (

          <li key={task.id}>

            <div className="task-left">

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheck(task.id)}
              />

              <span className={task.completed ? "check" : ""}>
                {task.text}
              </span>

            </div>

            <button
              className="delete"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>

  );
}

export default Todo;