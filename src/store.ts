import { configureStore } from "@reduxjs/toolkit";
import basicDashboardReducer from "./components/BasicDashboard/BasicDashboardSlice"
import mainReducer from "./components/Main/MainSlice"

export const store = configureStore({
  reducer: {
    // todos: todoReducer,
    basicDashboard: basicDashboardReducer,
    main: mainReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
