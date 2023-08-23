import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/accounts/Login";
import Home from "./container/Home";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="accounts/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
