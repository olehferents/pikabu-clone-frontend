import {createStore} from "redux";
import rootReducer from "../reducers/dateRangePicker";

const store = createStore(rootReducer);

export default store;