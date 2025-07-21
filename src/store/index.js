import { configureStore } from "@reduxjs/toolkit";
import ApplicationReducer from "./slices/application";
import PostsReducer from "./slices/posts";

export const store = configureStore({
    reducer: {
        application: ApplicationReducer,
        posts: PostsReducer,
    },
});
