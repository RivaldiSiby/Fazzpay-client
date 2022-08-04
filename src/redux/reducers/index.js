import { combineReducers } from "redux";
import auth from "./auth";
import pin from "./pin";
import user from "./user";

const reducers = combineReducers({
  auth: auth,
  pin: pin,
  user: user,
});

export default reducers;
