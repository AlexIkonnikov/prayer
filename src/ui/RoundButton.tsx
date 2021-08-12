import React, { FC } from "react";
import styled from "styled-components/native";
import { Plus } from "./icons/Plus";

export const RoundButton: FC = () => {
    return (
        <Circle>
            <Plus/>
        </Circle>
    )
};

const Circle = styled.View`
    width: 32px;
    height: 32px;
    background-color: #BFB393;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
`;