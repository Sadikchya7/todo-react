import "./style.css";

const Tab = ({ setFilterTask, taskCompleted, taskIncompleted }) => {
  const handleChange = (event) => {
    const value = event.target.value;

    if (value === "all") {
      setFilterTask(null);
    } else if (value === "completed") {
      taskCompleted();
    } else if (value === "incompleted") {
      taskIncompleted();
    }
  };

  return (
    <div className="tab">
      <select name="options" onChange={handleChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
  );
};

export { Tab };
