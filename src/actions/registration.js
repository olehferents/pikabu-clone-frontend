import {API_BASE_URL} from "../helpers/constants";

export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";

export const signUp = (username, email, password) => {
    return dispatch => fetch(API_BASE_URL + '/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    }).then(r => r.json())
        .then(
            response => {
                if (response.success === true) {
                    return dispatch(success(response))
                } else {
                    return dispatch(failure(response))
                }
            }
        );

    function success(response) {
        return {
            type: SIGN_UP_SUCCESS,
            response: response
        }
    }

    function failure(error) {
        return {
            type: SIGN_UP_FAILED,
            response: error
        }
    }
};