import { createStore } from "redux";
import RootReducer from "./reducers/index";

const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION())

export default store;