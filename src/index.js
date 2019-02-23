import React from "react";
import ReactDOM from "react-dom";

import Dashboard from "./Dashboard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Favorite Movie Directory</h1>
      <Dashboard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
