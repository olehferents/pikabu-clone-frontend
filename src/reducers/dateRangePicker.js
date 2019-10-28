import {ADD_DATE_RANGE} from "../actions/dateRangePicker";

const initialState = {
    range: {
        from: '',
        to: ''
    }
};

export const dateRangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATE_RANGE:
            return {
                ...state,
                range: action.range
            }
    }
    return state;
};
