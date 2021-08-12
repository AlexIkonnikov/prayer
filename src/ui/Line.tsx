import React, { FC } from "react";
import styled from "styled-components/native";
import {CSSProp} from "styled-components";

interface LineProps {
    color?: CSSProp
}

export const Line: FC<LineProps> = () => {
    return <StyledLine/>
};

const StyledLine = styled.View`
    width: 3px;
    height: 22px;
    border-radius: 10px;
    background-color: #AC5253;
    margin-right: 15px;
`;