import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

import "./App.css";
function App() {
  return (
    <>
      <Router>
        {/* <nav className="navigation-bar">
          <Link to="/">Login</Link> | {<Link to="/home">Home</Link>}
        </nav> */}

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
