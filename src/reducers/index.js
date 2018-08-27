import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import main from './mainAppReducer';

export default combineReducers({
  router: routerReducer,
  main,
});
