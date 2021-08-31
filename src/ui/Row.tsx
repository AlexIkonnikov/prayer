import React, {FC} from 'react';
import {CSSProp} from 'styled-components';
import styled from 'styled-components/native';

interface RowProps {
  containerStyled?: CSSProp;
}

export const Row: FC<RowProps> = ({children, containerStyled = {}}) => {
  return <StyledRow $CSS={containerStyled}>{children}</StyledRow>;
};

const StyledRow = styled.View<{$CSS: CSSProp}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({$CSS}) => $CSS};
`;
