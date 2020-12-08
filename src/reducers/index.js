import { combineReducers } from "redux";
import searchRobots from "./searchReducers";
import requestReducers from "./requestReducers";

export default combineReducers({searchRobots, requestReducers});