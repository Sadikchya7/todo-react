import { useState, useEffect } from "react";
import { Tab } from "../../components/Tab";
import { Card } from "../../components/Card";
import "./style.css";
import { CompletedCard } from "../../components/CompleteCard";
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

  const deleteTask = (index) => {
    const taskToDelete = filterTask[index];

    const updatedTodo = [];
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].title !== taskToDelete.title) {
        updatedTodo.push(todo[i]);
      }
    }
    setTodo(updatedTodo);
    localStorage.setItem("Todo", JSON.stringify(updatedTodo));

    const updatedFilter = [];
    for (let i = 0; i < filterTask.length; i++) {
      if (i !== index) {
        updatedFilter.push(filterTask[i]);
      }
    }
    setFilterTask(updatedFilter);
  };
  const checked = (updatedTodo) => {
    setTodo(updatedTodo);
    localStorage.setItem("Todo", JSON.stringify(updatedTodo));

    const newFilter = updatedTodo.filter((task) => task.status === "completed");
    setFilterTask(newFilter);
  };

  return (
    <>
      {/* <h1>Your To Do </h1> */}
      <h2>Your Completed Tasks</h2>
      <Tab />
      <CompletedCard
        todo={todo}
        checked={checked}
        deleteTask={deleteTask}
        filterTask={filterTask}
        // state="incomplete"
      />
    </>
  );
};

export default CompletedToDo;
