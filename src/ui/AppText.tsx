import React, {FC} from 'react';
import {CSSProp} from 'styled-components';
import styled from 'styled-components/native';
import {colors} from '../styles/colors';

interface AppTextProps {
  containerStyled?: CSSProp;
}

export const AppText: FC<AppTextProps> = ({children, containerStyled = {}}) => {
  return <StyledText $CSS={containerStyled}>{children}</StyledText>;
};

const StyledText = styled.Text<{$CSS?: CSSProp}>`
  font-size: 17px;
  color: ${colors.ligthBlack};
  ${({$CSS}) => $CSS};
`

