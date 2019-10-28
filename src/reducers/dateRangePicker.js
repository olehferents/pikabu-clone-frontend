import {ADD_DATE_RANGE} from "../actions/dateRangePicker";

const initialState = {
    range: {
        from: '',
        to: ''
    }
};

export const dateRangeReducer = (state = initialState, action) => {
    if (action.type === ADD_DATE_RANGE) {
        return {
            ...state,
            range: action.range
        }
    }
    return state;
};
