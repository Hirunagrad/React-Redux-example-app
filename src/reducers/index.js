import { combineReducers } from "redux";
import AllPostReducer from "./reducer-Allpost";
import reducerSelected from "./reducerSelected";

const rootReducer = combineReducers({
  allPost: AllPostReducer,
  selectedPost: reducerSelected,
});

export default rootReducer;
