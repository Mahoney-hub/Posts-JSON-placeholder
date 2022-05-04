import React from 'react';
import {IPost} from '../../types/types';
import {Paper} from '@mui/material';
import styled from 'styled-components';
import {ToolBox} from '../ToolBox';

interface PostItemPropsType {
    post: IPost
}

export const PostItem = ({post}: PostItemPropsType) => {
    return (
        <PaperStyled className={'post-item'} elevation={24}>
            <div className={'post-title'}>
                <h2>{post.id}. {post.title}</h2>
            </div>
            <div className={'post-text'}>
                <p>{post.body}</p>
                <ToolBox/>
            </div>
        </PaperStyled>
    );
};

const PaperStyled = styled(Paper)`
  && {
    color: whitesmoke;
    background: var(--dark-color);
  }`



