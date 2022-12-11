import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import Download from "../components/download/Download";
import Main from "../components/main/Main";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact element={<Main />} />
      <Route path="download" element={<Download />} />
    </Router>
  );
};

export default Routes;
