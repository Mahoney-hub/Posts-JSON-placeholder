import React, {useEffect, useState} from 'react';
import {PostItem} from './PostItem';
import {Pagination} from '@mui/material';
import {getCountPage, getCurrentData} from '../../utils/utils';
import {fetchPostsTC} from '../../store/reducers/posts-reducer';
import {AppDispatch} from '../../store/store';
import {selectorPosts} from '../../store/selectors/selectorPosts';
import {useSelector} from 'react-redux';
import {v1} from 'uuid';

export const PostList = () => {
    const [page, setPage] = useState<number>(1) // State для отображения текущей страницы
    const [countPaginationItem] = useState(3) // State для отображения количества элементов на каждой странице
    const data = useSelector(selectorPosts)
    const dispatch = AppDispatch()

    useEffect(() => {
        dispatch(fetchPostsTC())
    }, [])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    const currentData = getCurrentData(data, page, countPaginationItem)
    const countPage = getCountPage(data, countPaginationItem)

    return (
        <div className={'post-list'}>
            {currentData.map(p => <PostItem key={v1()} post={p}/>)}
            <div className={'paginate-wrapper'}>
                <Pagination color={'secondary'}
                            variant={'text'}
                            size={'large'}
                            count={countPage}
                            page={page}
                            onChange={handleChange}
                            showFirstButton
                            showLastButton
                            siblingCount={0}
                />
            </div>
        </div>
    );
};


