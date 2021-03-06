import React from "react";
import "./App.css";
import "./css/tailwind.css";
import "bulma/css/bulma.css";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </>
  );
}

export default App;
