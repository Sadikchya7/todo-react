import { Input } from "../../components/Input";
import { Tab } from "../../components/Tab";
import { Card } from "../../components/Card";
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
      <h1>To-Do List</h1>

      <Input
        addTask={addTask}
        // label={"New Task:"}
        placeholder={"This is placeholder"}
      />

      <Tab
        config={[
          {
            label: "COMPLETED",
            onClick: () => {
              taskCompleted();
            },
          },
          {
            label: "INCOMPLETED",
            onClick: () => {
              taskIncompleted();
            },
          },
          {
            label: "ALL",
            onClick: () => {
              setFilterTask(null);
            },
          },
        ]}
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
