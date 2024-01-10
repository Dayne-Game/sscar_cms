import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";

const appReducer = combineReducers({
    Post: postReducer,
})

const rootReducer = (state, action) => {
    // Reset all state to initial state when the logout action is dispatched
    if (action.type === 'auth/logout/fulfilled') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;