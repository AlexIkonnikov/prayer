import React, { FC } from "react";
import styled from "styled-components/native";

export const Center: FC = ({children}) => {
    return <CenterWrapper>{children}</CenterWrapper>;
}

const CenterWrapper = styled.View`
    flex-grow: 1;
    align-items: center;
`