import React, {FC} from 'react';
import {CSSProp} from 'styled-components';
import {StyledContainer} from './StyledContainer';

interface RowProps {
  containerStyled?: CSSProp;
}

export const Row: FC<RowProps> = ({children, containerStyled}) => {
  return (
    <StyledContainer
      containerStyled={
        `
            display: flex; 
            flex-direction: row; 
            align-items: center;` + containerStyled
      }>
      {children}
    </StyledContainer>
  );
};
