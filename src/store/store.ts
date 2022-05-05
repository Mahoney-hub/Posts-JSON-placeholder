import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {postsReducer} from './reducers/posts-reducer';


const rootReducer = combineReducers({
    posts: postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStoreType = ReturnType<typeof rootReducer>
export const AppDispatch = () => useDispatch<ThunkDispatch< RootStoreType,void,AnyAction>>()
//@ts-ignore
window.store = store;