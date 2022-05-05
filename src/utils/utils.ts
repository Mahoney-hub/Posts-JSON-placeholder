import {IPost} from '../types/types';

export const getCurrentData = (arr:IPost[], page:number, count:number) => {
    const lastItemIndex = page * count
    const firstItemIndex = lastItemIndex - count
    const currentItem = arr.slice(firstItemIndex, lastItemIndex)
    return currentItem
}

export const getCountPage = (arr:IPost[], count: number) => {
    let pageNumbers = 0

    for (let i = 1; i <= Math.ceil(arr.length / count); i++) {
        pageNumbers++
    }

    return pageNumbers
}