import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/samples/counter/counterSlice'
import { weatherQueries } from './weatherQueries'


export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [weatherQueries.reducerPath]: weatherQueries.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(weatherQueries.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch