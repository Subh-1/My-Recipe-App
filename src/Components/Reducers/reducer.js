import { combineReducers } from "redux";
import { SET_USER, CLEAR_USER } from "../Actions/action";

const initialUserState = {
  name: null,
  email: null,
  password: null,
};

const savedUser = JSON.parse(localStorage.getItem("currentUser"));

const userReducer = (state = savedUser || initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    case CLEAR_USER:
      return initialUserState;
    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
