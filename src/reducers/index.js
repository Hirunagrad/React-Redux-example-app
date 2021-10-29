import { combinedReducers } from "redux";
import AllPostReducer from "./reducer-Allpost";

const rootReducer = combinedReducers({
  allPost: AllPostReducer,
});

export default rootReducer;
