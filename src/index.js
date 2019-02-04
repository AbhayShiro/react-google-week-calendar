import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//CUstom imports
import Routes from "./routes";
import Store from "./store";

import "antd/dist/antd.css";
import "./styles.css";

const Root = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root store={Store} />, rootElement);
