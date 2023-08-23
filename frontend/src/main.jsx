import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./App.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Router>
      <App />
    </Router>
  </React.Fragment>
);
