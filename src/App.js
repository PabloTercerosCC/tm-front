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
        remider: false
      }
      
      const res = await fetch(`${backend}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })
  
      const data = await res.json()
  
      setTasks([...tasks, data])
    }

  return <Card tasks={tasks} onDelete={deleteTask} onAdd={addTask} />;
};

export default App;
