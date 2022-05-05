import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {TextField} from '@mui/material';
import styled from 'styled-components';
import {AppDispatch} from '../store/store';
import {addPostTC} from '../store/reducers/posts-reducer';

export const Heading = () => {
    const [title, setTitle] = useState<string>('')
    const dispatch = AppDispatch()

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (title.trim().length && e.key === 'Enter') {
            dispatch(addPostTC(title))
            setTitle('')
        }
    }

    return (
        <div className={'header'}>
            <TextFieldStyled value={title}
                             onChange={changeHandler}
                             onKeyDown={keyDownHandler}
                             placeholder={'Add Title...'}
            />
        </div>
    );
};

const TextFieldStyled = styled(TextField)`
  && {
    & > div {
      height: 40px;
      width: 360px;
      background: whitesmoke;
      border: none;
      font-size: 20px;
      font-weight: bold;
      font-family: cursive;
      font-style: italic;
    }
  }`

