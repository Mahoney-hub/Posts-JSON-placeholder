import axios from 'axios';
import {IPost} from '../types/types';

// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/',
// })

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
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    },
    // deletePostText(id: number) {
    //     return instance.put<ResponseType>(`posts/${id}`)
    // },
    // updatePostText(id: number, title: string) {
    //     return instance.put<{ title: string }, AxiosResponse<ResponseType>>(`posts/${id}`, {title})
    // }
}
