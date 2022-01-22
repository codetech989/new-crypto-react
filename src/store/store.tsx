import {applyMiddleware, configureStore,createStore} from '@reduxjs/toolkit'
import {loginReducer} from './Reducers/loginReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(loginReducer,composeWithDevTools(
    applyMiddleware(thunk)
)
)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch