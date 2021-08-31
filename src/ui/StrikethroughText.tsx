import React from 'react';
import { FC } from 'react';
import { css } from 'styled-components/native';
import { AppText } from './AppText';

export const StrikethroughText: FC = ({children}) => {
    return <AppText containerStyled={textStyle}>{children}</AppText>
}

const textStyle = css`text-decoration: line-through;`