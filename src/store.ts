import { configureStore } from '@reduxjs/toolkit'
import todoRecordReducer from './slice/TodoRecordSlice'
import mainReducer from './slice/MainSlice'
import unloginModalReducer from './slice/UnloginModalSlice'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { fetchTodoApi } from './api/thunk'

export const store = configureStore({
  reducer: {
    todoRecord: todoRecordReducer,
    main: mainReducer,
    unloginModal: unloginModalReducer
  },
  middleware (getDefaultMiddleware) {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: { fetchTodoApi }
      }
    })
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
