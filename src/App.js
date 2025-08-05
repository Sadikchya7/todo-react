import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
// import Home from "./pages/Home";
import AllToDo from "./pages/AllToDo";
import CompletedToDo from "./pages/CompletedToDo";
import IncompletedToDo from "./pages/IncompletedToDo";

import "./App.css";

function ProtectedRoute({ children }) {
  const hasAccess = localStorage.getItem("access") === "true";
  console.log(hasAccess, "hasAccess");
  if (!hasAccess) {
    return <Navigate to="/" />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/alltodo"
          element={
            <ProtectedRoute>
              <AllToDo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/completedtodo"
          element={
            <ProtectedRoute>
              <CompletedToDo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/incompletedtodo"
          element={
            <ProtectedRoute>
              <IncompletedToDo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
