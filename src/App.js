import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

import "./App.css";
function App() {
  const [todo, setTodo] = useState([]);
  const [filterTask, setFilterTask] = useState(null);

  const addTask = (newTask) => {
    setTodo([...todo, newTask]);
    setFilterTask(null);
  };

  const deleteTask = (index) => {
    const newTodo = [];
    for (let i = 0; i < todo.length; i++) {
      if (i !== index) {
        newTodo.push(todo[i]);
      }
    }
    setTodo(newTodo);
    setFilterTask(null);
  };

  const deleteAll = () => {
    setTodo([]);
    setFilterTask(null);
  };

  const checked = (updatedTodo) => {
    setTodo(updatedTodo);
  };

  const taskCompleted = () => {
    const completedTasks = todo.filter((task) => task.status === "completed");
    if (completedTasks.length === 0) {
      setFilterTask([]);
    } else {
      setFilterTask(completedTasks);
    }
  };

  const taskIncompleted = () => {
    const incompleteTasks = todo.filter((task) => task.status === "incomplete");
    if (incompleteTasks.length === 0) {
      console.log("no task");
      setFilterTask([]);
    } else {
      setFilterTask(incompleteTasks);
    }
  };

  useEffect(() => {
    if (todo.length === 0) {
      return;
    }
    localStorage.setItem("Todo", JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("Todo");
    if (savedTodos) {
      // console.log(savedTodos);

      setTodo(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <>
      <Router>
        {/* <nav className="navigation-bar">
          <Link to="/">Login</Link> | {<Link to="/home">Home</Link>}
        </nav> */}

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/home"
            element={
              <Home
                addTask={addTask}
                taskCompleted={taskCompleted}
                taskIncompleted={taskIncompleted}
                setFilterTask={setFilterTask}
                filterTask={filterTask}
                checked={checked}
                deleteTask={deleteTask}
                todo={todo}
                deleteAll={deleteAll}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
