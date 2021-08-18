import React, { FC } from "react";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { AppText } from "./AppText";

interface CounterProps {
    numeric: number
}

export const Counter: FC<CounterProps> = ({numeric}) => {
    return (
        <Circle>
            <AppText fs={9} color={colors.white}>{numeric}</AppText>
        </Circle>
    )
};

const Circle = styled.View`
    background: ${colors.red};
    width: 16px;
    height: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
