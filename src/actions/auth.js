import {ACCESS_TOKEN, API_BASE_URL} from "../helpers/constants";

export const SIGN_IN_SUCCEED = "SIGN_IN_SUCCEED";
export const SIGN_IN_FAILED = "SIGN_IN_FAILED";

export const signIn = (usernameOrEmail, password) => {
    return dispatch => fetch(API_BASE_URL + '/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        },
        body: JSON.stringify({
            usernameOrEmail: usernameOrEmail,
            password: password
        })
    }).then(r => r.json())
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            return dispatch => dispatch(success(response))
        }, error => {
            return dispatch => dispatch(failure(error))
        });

    function success(response) {
        return {
            type: SIGN_IN_SUCCEED,
            response: response.accessToken
        }
    }

    function failure(response) {
        return {
            type: SIGN_IN_FAILED,
            response: response
        }
    }

};

