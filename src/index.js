import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//CUstom imports
import Routes from "./routes";
import getStore from "./store";

import "antd/dist/antd.css";
import "./styles.css";

const { store, persistor } = getStore();

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root store={store} />, rootElement);
