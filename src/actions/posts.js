import {API_BASE_URL} from "../helpers/constants";

export const GET_NEW_POSTS_SUCCESS = "GET_NEW_POSTS_SUCCESS";
export const GET_NEW_POSTS_FAILED = "GET_NEW_POSTS_FAILED";

export const getNewPosts = () => {
    return dispatch => fetch(API_BASE_URL + '/api/posts/new', {
        method: 'GET'
    }).then(r => r.json())
        .then(
            response => {
                return dispatch(success(response))
            }
        ).catch(
            response => {
                return dispatch(failure(response))
            }
        );

    function success(response) {
        return {
            type: GET_NEW_POSTS_SUCCESS,
            posts: response
        }
    }

    function failure(response) {
        return {
            type: GET_NEW_POSTS_FAILED,
            posts: response
        }
    }
};