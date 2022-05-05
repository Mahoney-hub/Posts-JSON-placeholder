import React, {useState} from 'react';
import {IPost} from '../../types/types';
import {IconButton, Paper} from '@mui/material';
import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {AppDispatch} from '../../store/store';
import {EditableSpan} from '../EditableSpan';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {removePostTC} from '../../store/reducers/posts-reducer';

interface PostItemPropsType {
    post: IPost
}

export const PostItem = ({post}: PostItemPropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [editTitle, setEditTitle] = useState(false)

    const dispatch = AppDispatch()

    const changePostText = (title: string) => {
        // dispatch(updatePostTextTC(post.id, title))
    }
    const changePostTitle = (title: string) => {
        // dispatch(updatePostTextTC(post.id, title))
    }

    return (
        <PaperStyled className={'post-item'} elevation={24}>
            <div className={'post-title'}>
                <h2>
                    {post.id}.
                    <EditableSpan value={post.title} onChange={changePostTitle} editMode={editTitle}
                                  setEditMode={setEditTitle}/>
                    <IconButtonStyled>
                        <CreateIcon/>
                    </IconButtonStyled>
                    <IconButtonStyled onClick={() => dispatch(removePostTC(post.id))}>
                        <DeleteForeverIcon/>
                    </IconButtonStyled>
                </h2>
            </div>
            <div className={'post-text'}>
                <EditableSpan value={post.body} onChange={changePostText} editMode={editMode}
                              setEditMode={setEditMode}/>
                <div className={'toolbox'}>
                    <IconBtnStyled onClick={() => setEditMode(!editMode)}>
                        <BorderColorIcon/>
                    </IconBtnStyled>
                    <IconBtnStyled>
                        <HighlightOffIcon/>
                    </IconBtnStyled>
                </div>
            </div>
        </PaperStyled>
    );
};

const PaperStyled = styled(Paper)`
  && {
    color: whitesmoke;
    background: var(--dark-color);
  }`
const IconButtonStyled = styled(IconButton)`
  && {
    color: var(--green-color);
  }`
const IconBtnStyled = styled(IconButton)`
  && {
    color: var(--red-color);
  }`



