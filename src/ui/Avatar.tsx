import React, { FC } from "react";
import { CSSProp } from "styled-components";
import styled from "styled-components/native";

interface AvatarProps {
    src: string
    width?: number,
    css?: CSSProp
}

export const Avatar: FC<AvatarProps> = ({src, ...outerProps}) => {
    return <StyledImage source={{uri: src}} {...outerProps} />
}

const StyledImage = styled.Image<{width?: number, css?: CSSProp}>`
    border-radius: ${props => props.width ? props.width / 2 + 'px' : '16px'};
    width: ${props => props.width  ? props.width + "px" : '32px'};
    height: ${props => props.width  ? props.width + "px" : '32px'};
    margin-right: 8px;
    ${props => props.css ?? ''};
`