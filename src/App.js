import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Drawer from '../src/components/Drawer'
import Provider from "./Context/Provide";

function App() {
  return (
    <Provider>
      <Router>
        <Drawer>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Dashboard" element={<Home />} />
            <Route exact path="/Users" element={<Users />} />
          </Routes>
        </Drawer>
      </Router>
    </Provider>
  );
}

export default App;
