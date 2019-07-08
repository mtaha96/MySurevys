import { combineReducers } from "redux";
import authReducer from "./authReducer";
const state = {};
export default combineReducers({
  auth: authReducer
});
