import React, { FC } from "react";
import { CSSProp } from "styled-components";
import styled from "styled-components/native";

interface AppTextProps {
    css?: CSSProp
}

export const AppText: FC<AppTextProps> = ({children, css}) => {
    return (
        <StyledText css={css}>{children}</StyledText>
    )
}

const StyledText = styled.Text<AppTextProps>`
    font-size: 13px;
    line-height: 15px;
    text-transform: uppercase;
    color: #72A8BC;
    ${props => props.css ?? ''}
`;