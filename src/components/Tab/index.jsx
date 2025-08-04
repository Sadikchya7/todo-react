import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";

const Tab = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedValue = () => {
    if (location.pathname === "/alltodo") return "all";
    if (location.pathname === "/completedtodo") return "completed";
    if (location.pathname === "/incompletedtodo") return "incompleted";
    return "";
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (value === "all") {
      navigate("/alltodo");
    } else if (value === "completed") {
      navigate("/completedtodo");
    } else if (value === "incompleted") {
      navigate("/incompletedtodo");
    }
  };

  return (
    <div className="tab">
      <select name="options" value={getSelectedValue()} onChange={handleChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
  );
};

export { Tab };
