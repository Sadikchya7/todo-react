import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./style.css";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const isLoggedIn = localStorage.getItem("access") === "true";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "root" && username === "Admin") {
      setIsCorrectPassword(true);
    } else {
      alert("incorrect password or username!");
    }
  };

  if (isCorrectPassword) {
    localStorage.setItem("access", "true");
    // debugger;
    // return <Navigate to="/home" />;
  }
  if (isLoggedIn || isCorrectPassword) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
