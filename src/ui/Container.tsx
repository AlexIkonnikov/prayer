import React, {FC} from 'react';
import {StyledContainer} from './StyledContainer';

export const Container: FC = ({children}) => {
  return (
    <StyledContainer containerStyled={'margin: 0 15px;'}>
      {children}
    </StyledContainer>
  );
};
