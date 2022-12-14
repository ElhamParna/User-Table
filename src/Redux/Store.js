import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(logger , thunk)
  )
);
export default store;
