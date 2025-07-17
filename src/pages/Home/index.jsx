import { Input } from "../../components/Input";
import { Tab } from "../../components/Tab";
import { Card } from "../../components/Card";
import "./style.css";
const Home = ({
  addTask,
  taskCompleted,
  taskIncompleted,
  setFilterTask,
  filterTask,
  checked,
  deleteTask,
  todo,
  deleteAll,
}) => {
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
