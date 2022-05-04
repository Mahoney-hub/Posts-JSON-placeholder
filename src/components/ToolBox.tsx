import React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styled from 'styled-components';
import {IconButton} from '@mui/material';

export const ToolBox = () => {
    return (
        <div className={'toolbox'}>
            <IconButtonStyled>
                <BorderColorIcon/>
            </IconButtonStyled>
            <IconButtonStyled>
                <HighlightOffIcon/>
            </IconButtonStyled>
        </div>
    );
};

const IconButtonStyled = styled(IconButton)`
&& {
  color: var(--red-color);
}`

