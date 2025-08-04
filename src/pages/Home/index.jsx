import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "../../components/Input";
import { Tab } from "../../components/Tab";
import { Card } from "../../components/Card";
import "./style.css";
const Home = () => {
  const [todo, setTodo] = useState([]);
  const [filterTask, setFilterTask] = useState(null);
  const hasAccess = localStorage.getItem("access") === "true";
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
  if (!hasAccess) {
    return <Navigate to="/" />;
  }

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

  // else {
  //   return <Navigate to="/home"></Navigate>;
  // }
  return (
    <div className="home-page">
      <h1>Your To Do</h1>

      <Input
        addTask={addTask}
        // label={"New Task:"}
        placeholder={"Add new task"}
      />
      <Tab
        taskCompleted={taskCompleted}
        taskIncompleted={taskIncompleted}
        setFilterTask={setFilterTask}
      />

      <Card
        filterTask={filterTask}
        checked={checked}
        deleteTask={deleteTask}
        todo={todo}
        deleteAll={deleteAll}
      />
    </div>
  );
};
export default Home;
