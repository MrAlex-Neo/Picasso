// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../axios";


// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//     const { data } = await axios.get('/posts');
//     return data;
// })

// export const fetchOnePost = createAsyncThunk('posts/fetchRemovePost', async (id) =>
//     axios.get(`/posts/${id}`)
// )

// const initialState = {
//     posts: {
//         items: [],
//         status: 'loading',
//     },
// }

// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchPosts.pending, (state) => {
//                 state.posts.items = [];
//                 state.posts.status = 'loading';
//             })
//             .addCase(fetchPosts.fulfilled, (state, action) => {
//                 state.posts.items = action.payload;
//                 state.posts.status = 'loaded';
//             })
//             .addCase(fetchPosts.rejected, (state) => {
//                 state.posts.items = [];
//                 state.posts.status = 'error';
//             })
//     },
// });

// export const { reducer: postsReducer } = postsSlice; // Export the postsReducer
