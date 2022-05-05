import {IPost} from '../../types/types';
import {addPost, changePostText, getPosts, removePost, removePostText} from '../actions/posts';
import {Dispatch} from 'redux';
import {postsAPI} from '../../api/posts-api';


type ActionsType =
    | ReturnType<typeof getPosts
    | typeof removePost
    | typeof addPost
    | typeof removePostText
    | typeof changePostText>

export const postsReducer = (state: IPost[] = [], action: ActionsType): IPost[] => {
    switch (action.type) {
        case 'GET-POSTS':
            return action.posts.map(p => ({...p}))
        case 'REMOVE-POSTS':
            return state.filter(p => p.id !== action.id)
        case 'ADD-POST':
            return [action.post, ...state]
        case 'REMOVE-POST-TEXT':
            return state.map(p => p.id !== action.id ? p : {...p, body: ''})
        case 'CHANGE-POST-TEXT':
            return state.map(p => p.id !== action.id ? p : {...p, body: action.title})
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
        .then((json) => dispatch(addPost({...json, id: json.id + 101})))
}
// export const deletePostTextTC = (id: number) => (dispatch: Dispatch) => {
//     postsAPI.deletePostText(id)
//         .then((res) => {
//             dispatch(removePostText(id))
//         })
// }
// export const updatePostTextTC = (id: number, title: string) => (dispatch: Dispatch) => {
//     postsAPI.updatePostText(id, title)
//         .then((res) => {
//             dispatch(changePostText(id, title))
//         })
// }