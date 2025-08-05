import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "../../components/Input";
import { Tab } from "../../components/Tab";
import { Card } from "../../components/Card";
import "./style.css";
const AllToDo = () => {
  const [todo, setTodo] = useState([]);
  const [filterTask, setFilterTask] = useState(null);
  // const hasAccess = localStorage.getItem("access") === "true";
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
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("access");
    navigate("/");
  };
  // const taskCompleted = () => {
  //   const completedTasks = todo.filter((task) => task.status === "completed");
  //   if (completedTasks.length === 0) {
  //     setFilterTask([]);
  //   } else {
  //     setFilterTask(completedTasks);
  //   }
  // };

  // const taskIncompleted = () => {
  //   const incompleteTasks = todo.filter((task) => task.status === "incomplete");
  //   if (incompleteTasks.length === 0) {
  //     console.log("no task");
  //     setFilterTask([]);
  //   } else {
  //     setFilterTask(incompleteTasks);
  //   }
  // };

  return (
    <div className="home-page">
      <button className="logout-button" onClick={logOut}>
        Logout
      </button>
      <h1>Your To Do</h1>

      <Input addTask={addTask} placeholder={"Add new task"} />
      <Tab />

      <Card
        filterTask={filterTask}
        checked={checked}
        deleteTask={deleteTask}
        todo={todo}
        deleteAll={deleteAll}
        state="home"
      />
    </div>
  );
};
export default AllToDo;
