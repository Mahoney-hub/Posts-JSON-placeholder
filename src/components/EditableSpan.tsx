import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

interface EditableSpanPropsType  {
    value: string
    editMode: boolean
    setEditMode: (value: boolean) => void
    onChange: (newValue: string) => void
}

export const EditableSpan = memo(({value, onChange, editMode, setEditMode}: EditableSpanPropsType) => {
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            activateViewMode()
        }
    }

    return editMode
        ? <TextFieldStyled value={title}
                           onChange={changeTitle}
                           onBlur={activateViewMode}
                           onKeyDown={keyDownHandler}
                           fullWidth
                           multiline
                           autoFocus
        />
        : <span>{value}</span>
})

const TextFieldStyled = styled(TextField)`
&&{
  & > div {
    color: whitesmoke;
    text-align: center;
  }
}`
