import {API_BASE_URL} from "../helpers/constants";

export const SIGN_SUCCESS = "SIGN_SUCCESS";
export const SIGN_FAILED = "SIGN_FAILED";

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
        .then(response => {
                console.log(dispatch(success(response)));
                return dispatch =>
                    dispatch(success(response))
            }, error => {
                return dispatch =>
                    dispatch(failure(error));
            }
        );

    function success(response) {
        return {
            type: SIGN_SUCCESS,
            response: response
        }
    }

    function failure(response) {
        return {
            type: SIGN_FAILED,
            response: response
        }
    }

};