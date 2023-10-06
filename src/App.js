import { useState, useEffect } from "react";
import Card from "./Components/Card";
import "./App.css";

const backend = "http://localhost:5100/api/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`${backend}/${id}`);
    const data = await res.json();

    return data;
  };

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${backend}`);
    const data = await res.json();

    return data;
  };

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`${backend}/${id}`, {
      method: "DELETE",
    });

    res.status === 204
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error Deleting This Task");
  };

  // Add Task
  const addTask = async () => {
    const task = {
      text: "new task",
      day: "none",
      remider: false,
    };

    const res = await fetch(`${backend}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  // Toggle Done
  const toggleDone = async (id) => {
    const taskToToggle = await fetchTask(id);
    const toggle = !taskToToggle.reminder;
    const updTask = { ...taskToToggle, reminder: toggle };

    await fetch(`${backend}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: toggle } : task
      )
    );
  };

  // Toggle Done
  const changeName = async (id, newText) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, text: newText };

    await fetch(`${backend}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <Card
      tasks={tasks}
      onDelete={deleteTask}
      onAdd={addTask}
      onToggle={toggleDone}
      onInput={changeName}
    />
  );
};

export default App;
