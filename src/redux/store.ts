import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;
