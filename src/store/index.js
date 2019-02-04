import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const persistConfig = {
  key: "abhayshiro-calendar",
  storage
};
const initialState = {};

export default () => {
  let store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    composeWithDevTools()
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
