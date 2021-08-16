import React, { FC } from "react";
import styled from "styled-components/native";
import { colors } from "../styles/colors";

interface AppTextProps {
    fs?: number
    color?: string
    bold?: boolean
    upp?: boolean,
    lineThrough?:boolean
}

export const AppText: FC<AppTextProps> = ({children, ...outerProps}) => {
    return (
        <StyledText {...outerProps}>{children}</StyledText>
    )
}

const StyledText = styled.Text<AppTextProps>`
    font-size: ${props => props.fs ? props.fs + 'px' : '17px'};
    text-transform: ${props => props.upp ? 'uppercase' : 'none'};
    color: ${props => props.color ?? colors.ligthBlack};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    text-decoration: ${props => props.lineThrough ? 'line-through' : 'none'};
`;