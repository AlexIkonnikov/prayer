import React, {FC} from 'react';
import {TextInputProps} from 'react-native';
import {CSSProp} from 'styled-components';
import styled from 'styled-components/native';
import {colors} from '../styles/colors';

interface InputProps extends TextInputProps {
  containerStyled?: CSSProp;
}

export const Input: FC<InputProps> = ({containerStyled = {}, ...outerProps}) => {
  return <StyledInput $CSS={containerStyled} {...outerProps} />;
};

const StyledInput = styled.TextInput<{$CSS: CSSProp}>`
  padding: 0;
  padding-left: 15px;
  padding-right: 25px;
  font-size: 17px;
  color: ${colors.lightBlack};
  ${({$CSS}) => $CSS}
`;