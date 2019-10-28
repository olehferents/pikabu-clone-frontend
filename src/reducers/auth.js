import {SIGN_IN} from "../actions/auth";

const initialState = {
    usernameOrEmail: '',
    password: ''
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                usernameOrEmail: action.usernameOrEmail,
                password: action.password
            };
        default: return state;
    }
};