import { configureStore } from "@reduxjs/toolkit";
import markReducer from "./reducers/markReducer";
import headerReducer from "./reducers/headerReducer";

export const store = configureStore({
  reducer: {
    mark: markReducer,
    header: headerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
