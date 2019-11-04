import {GET_NEW_POSTS_SUCCESS, GET_NEW_POSTS_FAILED} from "../actions/posts";

const initialState = {
    posts: []
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            };
        case GET_NEW_POSTS_FAILED:
            return {
                ...state,
                posts: action.posts
            };
        default:
            return state;
    }
};