import { useState, useEffect } from "react";
import { Tab } from "../../components/Tab";
import { Card } from "../../components/Card";
import "./style.css";
const CompletedToDo = () => {
  const [todo, setTodo] = useState([]);
  const [filterTask, setFilterTask] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("Todo");
    if (savedTodos) {
      const allTasks = JSON.parse(savedTodos);
      setTodo(allTasks);
      const completeTasks = allTasks.filter(
        (task) => task.status === "completed"
      );
      setFilterTask(completeTasks);
    }
  }, []);

  const checked = (updatedTodo) => {
    setTodo(updatedTodo);
    localStorage.setItem("Todo", JSON.stringify(updatedTodo));

    const newFilter = updatedTodo.filter((task) => task.status === "completed");
    setFilterTask(newFilter);
  };

  return (
    <>
      <h1>Your To Do</h1>
      <h2>Complete Tasks</h2>

      <Tab />
      <Card todo={todo} checked={checked} filterTask={filterTask} />
    </>
  );
};

export default CompletedToDo;
