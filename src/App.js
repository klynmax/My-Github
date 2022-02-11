import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Teste from "./pages/Teste";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Teste">Teste</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route  exact path="/" element={<Home />} />
          <Route  exact path="/Teste" element={<Teste />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
