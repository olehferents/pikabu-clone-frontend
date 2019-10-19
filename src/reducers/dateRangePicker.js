import {ADD_DATE_RANGE} from "../actions/dateRangePicker";

const initialState = {
    range: {
        from: null,
        to: null
    }
};

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_DATE_RANGE) {
        return {
            ...state,
            range: action.range
        }
    }
    return state;
};

export default rootReducer;