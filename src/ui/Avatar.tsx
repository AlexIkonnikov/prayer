import React, { FC } from "react";
import styled from "styled-components/native";

interface AvatarProps {
    src: string
    width?: number,
}

export const Avatar: FC<AvatarProps> = ({src, width, }) => {
    return <StyledImage source={{uri: src}} width={width} />
}

const StyledImage = styled.Image<{width?: number}>`
    border-radius: ${props => props.width ? props.width / 2 + 'px' : '16px'}
    width: ${props => props.width  ? props.width : '32px'}
    height: ${props => props.width  ? props.width : '32px'};
    margin-right: 8px;
`