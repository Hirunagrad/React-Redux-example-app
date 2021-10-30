import { combineReducers } from "redux";
import AllPostReducer from "./reducer-Allpost";

const rootReducer = combineReducers({
  allPost: AllPostReducer,
});

export default rootReducer;
