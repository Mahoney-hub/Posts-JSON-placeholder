import axios from 'axios';
import {IPost} from '../types/types';

// api
export const postsAPI = {
    getPosts() {
        return axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts/')
    },
    deletePost(id: string) {
        return axios.delete<ResponseType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    },
    createPost(title: string) {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: `${title}`,
                body: '',
                userId: 11,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    },
    updatePostTitle(id: number, newTitle: string) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: newTitle,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    },
    updatePostText(id: number, newText: string) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            body: newText,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    },
    deletePostText(id: number) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                body: '',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
}
