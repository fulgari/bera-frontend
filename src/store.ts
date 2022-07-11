import { configureStore } from "@reduxjs/toolkit";
import presentDayReducer from "./components/PresentDay/PresentDaySlice";
import passDaysReducer from "./components/PastDays/PastDaysSlice";
// ...

export const store = configureStore({
  reducer: {
    // todos: todoReducer,
    presentDay: presentDayReducer,
    passDays: passDaysReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;