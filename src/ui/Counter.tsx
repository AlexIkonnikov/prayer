import React, { FC } from "react";
import styled from "styled-components/native";

interface CounterProps {
    numeric: number
}

export const Counter: FC<CounterProps> = ({numeric}) => {
    return (
        <Circle>
            <StyledText>{numeric}</StyledText>
        </Circle>
    )
};

const Circle = styled.View`
    background: #AC5253;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const StyledText = styled.Text`
    color: #FFFFFF;
    font-size: 9px;
`;