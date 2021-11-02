import { SELECT_POST } from "../actions/type";

export default function (state = null, action) {
  switch (action.type) {
    case SELECT_POST:
      return action.payload;
      break;
  }
  return state;
}
