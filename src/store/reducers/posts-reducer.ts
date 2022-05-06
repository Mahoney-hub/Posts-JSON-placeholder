import {IPost} from '../../types/types';
import {
    addPost,
    changePostText,
    changePostTitle,
    clearPostText,
    getPosts,
    removePost,
    removePostText
} from '../actions/posts';
import {Dispatch} from 'redux';
import {postsAPI} from '../../api/posts-api';
import {getRandomNumber} from '../../utils/utils';


type ActionsType =
    | ReturnType<typeof getPosts
    | typeof removePost
    | typeof addPost
    | typeof removePostText
    | typeof changePostTitle
    | typeof changePostText
    | typeof clearPostText>

export const postsReducer = (state: IPost[] = [], action: ActionsType): IPost[] => {
    switch (action.type) {
        case 'GET-POSTS':
            return action.posts.map(p => ({...p}))
        case 'REMOVE-POST':
            return state.filter(p => p.id !== action.id)
        case 'ADD-POST':
            return [action.post, ...state]
        case 'CHANGE-POST-TITLE':
            return state.map(p => p.id !== action.id ? p : {...p, title: action.title})
        case 'CHANGE-POST-TEXT':
            return state.map(p => p.id !== action.id ? p : {...p, body: action.text})
        case 'CLEAR-POST-TEXT':
            return state.map(p => p.id !== action.id ? p : {...p, body: ''})
        default:
            return state
    }
}

// Thunk
export const fetchPostsTC = () => {
    return (dispatch: Dispatch) => {
        postsAPI.getPosts()
            .then((response) => {
                dispatch(getPosts(response.data))
            })
    }
}
export const removePostTC = (id: number) => (dispatch: Dispatch) => {
    postsAPI.deletePost(id.toString())
        .then((res) => {
            dispatch(removePost(id))
        })
}
export const addPostTC = (title: string) => (dispatch: Dispatch) => {
    postsAPI.createPost(title)
        .then((response) => response.json())
        .then((json) => dispatch(addPost({...json, id: getRandomNumber()})))
}
export const updatePostTitleTC = (id: number, title: string) => (dispatch: Dispatch) => {
    postsAPI.updatePostTitle(id, title)
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then((json) => dispatch(changePostTitle(id, title)))
}
export const updatePostTextTC = (id: number, text: string) => (dispatch: Dispatch) => {
    postsAPI.updatePostText(id, text)
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then((json) => dispatch(changePostText(id, text)))
}
export const deletePostTextTC = (id: number) => (dispatch: Dispatch) => {
    postsAPI.deletePostText(id)
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then((json) => dispatch(clearPostText(id)))
}
