import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

export const postsSlice = createSlice({
    name: "projectFiles",
    initialState,
    reducers: {
        setPost: (state, action) => {
            console.log(state, action);
        },
    },
});

export const { setPost } = postsSlice.actions;
export default postsSlice.reducer;
