import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPosts, getSinglePost } from "./postService";

export const statuses = {
    idle: 'IDLE',
    loading: 'LOADING',
    loaded: 'LOADED',
    error: 'ERROR',
};

const initialState = {
    posts: [],
    post: {},
    status: statuses.idle,
}

export const getPosts = createAsyncThunk('post/getAllPosts', async (_, thunkAPI) => {
    try {
        return await getAllPosts();
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getPost = createAsyncThunk('post/getSinglePost', async (id, thunkAPI) => {
    try {
        return await getSinglePost(id);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const postSlice = createSlice({
    name: 'Post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = statuses.loading;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = statuses.loaded;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = statuses.error;
                state.error = action.payload;
            })
            .addCase(getPost.pending, (state) => {
                state.status = statuses.loading;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.status = statuses.loaded;
                state.post = action.payload;
            })
            .addCase(getPost.rejected, (state, action) => {
                state.status = statuses.error;
                state.error = action.payload;
            })
    }
})

export const selectPosts = (state) => state.Post.posts;

export default postSlice.reducer;