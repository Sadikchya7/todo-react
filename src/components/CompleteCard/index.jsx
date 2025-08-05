import "./style.css";
import Delete from "./../../assests/trash-can.png";

const CompletedCard = ({ filterTask, checked, deleteTask, todo }) => {
  const onChecked = (index) => {
    const updatedTodo = [...todo];
    const task = updatedTodo[index];
    task.checked = !task.checked;
    task.status = task.checked ? "completed" : "incomplete";

    checked(updatedTodo);
  };

  return (
    <div className="card">
      {todo.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray" }}>No tasks available</p>
      ) : filterTask.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray" }}>
          No tasks matching filter
        </p>
      ) : (
        filterTask.map((task, index) => (
          <div
            key={index}
            className="task-list-container"
            style={{
              backgroundColor: task.checked ? "#50C878" : "#FF0000",
              color: "white",
              border: "none",
            }}
          >
            <div className="task-list">
              {/* <input
                type="checkbox"
                checked={task.checked}
                onChange={() => onChecked(index)}
              /> */}
              <label
                style={{
                  textDecoration: task.checked ? "line-through" : "none",
                }}
              >
                {task.title}
              </label>
            </div>
            <button onClick={() => deleteTask(index)}>
              <img src={Delete} alt="delete" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export { CompletedCard };
