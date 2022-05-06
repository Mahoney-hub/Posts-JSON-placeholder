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
import {deletePostTextTC, removePostTC, updatePostTextTC, updatePostTitleTC} from '../../store/reducers/posts-reducer';

interface PostItemPropsType {
    post: IPost
}

export const PostItem = ({post}: PostItemPropsType) => {
    let [editText, setEditText] = useState(false)
    let [editTitle, setEditTitle] = useState(false)

    const dispatch = AppDispatch()

    const changePostText = (text: string) => {
        dispatch(updatePostTextTC(post.id, text))
    }
    const changePostTitle = (title: string) => {
        dispatch(updatePostTitleTC(post.id, title))
    }

    return (
        <PaperStyled className={'post-item'} elevation={24}>
            <div className={'post-title'}>
                <h2>
                    {post.id}.
                    <EditableSpan value={post.title} onChange={changePostTitle} editMode={editTitle}
                                  setEditMode={setEditTitle}/>
                    <IconButtonStyled onClick={() => setEditTitle(!editTitle)}>
                        <CreateIcon/>
                    </IconButtonStyled>
                    <IconButtonStyled onClick={() => dispatch(removePostTC(post.id))}>
                        <DeleteForeverIcon/>
                    </IconButtonStyled>
                </h2>
            </div>
            <div className={'post-text'}>
                <EditableSpan value={post.body} onChange={changePostText} editMode={editText}
                              setEditMode={setEditText}/>
                <div className={'toolbox'}>
                    <IconBtnStyled onClick={() => setEditText(!editText)}>
                        <BorderColorIcon/>
                    </IconBtnStyled>
                    <IconBtnStyled onClick={() => dispatch(deletePostTextTC(post.id))}>
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



