import {combineReducers} from "redux";

import {registrationReducer} from "./registration";
import {dateRangeReducer} from "./dateRangePicker";
import {authReducer} from "./auth";

export default combineReducers({
    date: dateRangeReducer,
    registration: registrationReducer,
    auth: authReducer
});