export const ADD_DATE_RANGE = 'ADD_DATE_RANGE';

export const addDateRange = (range) => {
    return {
        type: ADD_DATE_RANGE,
        range: range
    }
};