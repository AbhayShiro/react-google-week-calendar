import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import all pages
import MainPage from "../layout/main";

export default () => (
  <Router>
    <Route path="/" component={MainPage} />
  </Router>
);
