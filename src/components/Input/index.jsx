import { useEffect, useState } from "react";
import "./style.css";
import Add from "./../../assests/line.png";
const Input = ({ addTask, label, placeholder }) => {
  const [task, setTask] = useState("");

  const onChange = (event) => {
    setTask(event.currentTarget.value);
  };

  const onAdd = () => {
    const newTask = {
      title: task,
      checked: false,
      status: "incomplete",
    };
    addTask(newTask);
    setTask("");
  };

  useEffect(() => {
    const clickEventHandler = (event) => {
      if (event.key === "Enter") {
        onAdd();
      }
    };

    document.addEventListener("keydown", clickEventHandler);

    return () => {
      document.removeEventListener("keydown", clickEventHandler);
    };
  }, [task]);

  return (
    <div>
      <div className="input-box">
        {label && <label>{label}</label>}
        <input
          type="text"
          value={task}
          onChange={onChange}
          placeholder={placeholder}
        />
        <button onClick={onAdd}>
          <img src={Add} alt="add"></img>
        </button>
      </div>
    </div>
  );
};

export { Input };
