import { useState, useEffect } from "react";
import { Tab } from "../../components/Tab";
import { Card } from "../../components/Card";
import "./style.css";
const IncompletedToDo = () => {
  const [todo, setTodo] = useState([]);
  // const [IncompletedTasks, setIncompletedTasks] = useState([]);
  const [filterTask, setFilterTask] = useState([]);
  useEffect(() => {
    const savedTodos = localStorage.getItem("Todo");
    if (savedTodos) {
      const allTasks = JSON.parse(savedTodos);
      setTodo(allTasks);
      const incompleteTasks = allTasks.filter(
        (task) => task.status === "incomplete"
      );
      setFilterTask(incompleteTasks);
    }
  }, []);

  const checked = (updatedTodo) => {
    setTodo(updatedTodo);
    localStorage.setItem("Todo", JSON.stringify(updatedTodo));

    const newFilter = updatedTodo.filter(
      (task) => task.status === "incomplete"
    );
    setFilterTask(newFilter);
  };

  return (
    <>
      <h1>Your To do</h1>
      <h2>Incomplete Tasks</h2>
      <Tab />
      <Card todo={todo} checked={checked} filterTask={filterTask} />
    </>
  );
};

export default IncompletedToDo;
