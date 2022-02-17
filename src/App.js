import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Teste from "./pages/Teste";
import Drawer from '../src/components/Drawer'

function App() {
  return (
    <Router>
      <Drawer>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Dashboard" element={<Home />} />
          <Route exact path="/Teste" element={<Teste />} />
        </Routes>
      </Drawer>
    </Router>
  );
}

export default App;
