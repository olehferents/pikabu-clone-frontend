import {combineReducers} from "redux";

import {registrationReducer} from "./registration";
import {dateRangeReducer} from "./dateRangePicker";
import {authReducer} from "./auth";
import {postsReducer} from "./posts";

export default combineReducers({
    date: dateRangeReducer,
    registration: registrationReducer,
    auth: authReducer,
    posts: postsReducer
});