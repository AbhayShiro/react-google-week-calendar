import { BrowserRouter as Router, Route } from "react-router-dom";

//import all pages
import MainPage from "../layout/main";

const Root = () => (
  <Router>
    <Route path="/" component={MainPage} />
  </Router>
);
