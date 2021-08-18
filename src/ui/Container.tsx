import React, { FC } from 'react';
import styled from 'styled-components/native';



export const Container: FC = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.View`
    margin: 0 15px;
`;