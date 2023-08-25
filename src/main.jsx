import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "./App.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Router>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_PUBLIC_GOOGLE_API_TOKEN}>
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.Fragment>
);
