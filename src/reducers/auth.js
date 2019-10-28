import {SIGN_IN_FAILED, SIGN_IN_SUCCEED} from "../actions/auth";

const initialState = {
    accessToken: ''
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCEED:
            return {
                ...state,
                accessToken: action.accessToken
            };
        case SIGN_IN_FAILED:
            return {
                ...state,
                accessToken: action.accessToken
            };
        default: return state;
    }
};