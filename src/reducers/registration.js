import {SIGN_UP_SUCCESS, SIGN_UP_FAILED} from "../actions/registration";

const initialState = {
    response: {
        success: '',
        message:''
    }
};

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                response: action.response
            };
        case SIGN_UP_FAILED:
            return {
                ...state,
                response: action.response
            };
        default: return state;
    }
};