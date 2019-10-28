import {SIGN_SUCCESS} from "../actions/registration";
import {SIGN_FAILED} from "../actions/registration";

const initialState = {
    response: {
        success: '',
        message:''
    }
};

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_SUCCESS:
            return {
                ...state,
                response: action.response
            };
        case SIGN_FAILED:
            return {
                ...state,
                response: action.response
            };
        default: return state;
    }
};