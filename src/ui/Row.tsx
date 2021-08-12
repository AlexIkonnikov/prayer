import React, { FC } from "react";
import styled from "styled-components/native";
import { CSSProp } from "styled-components";

interface RowProps {
    css?: CSSProp
}

export const Row: FC<RowProps> = ({children, css}) => {
    return (
        <ViewRow css={css}>
            {children}
        </ViewRow>
    )
};

export const ViewRow = styled.View<{css?: CSSProp}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${props => props.css ?? ''}
`;