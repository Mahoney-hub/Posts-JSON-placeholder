import React from 'react';
import {TextField} from '@mui/material';
import styled from 'styled-components';

export const Heading = () => {
    return (
        <div className={'header'}>
            <TextFieldStyled/>
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

