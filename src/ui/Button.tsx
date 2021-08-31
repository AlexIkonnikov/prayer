import React, {FC} from 'react';
import {ButtonProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import {colors} from '../styles/colors';
import {AppText} from './AppText';

export const Button: FC<ButtonProps> = ({title, ...outerProps}) => {
  return (
    <StyledButton {...outerProps}>
      <AppText containerStyled={buttonTextStyle}>{title}</AppText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  background-color: ${colors.gray};
  font-size: 12px;
  padding: 8px 0;
  width: 209px;
  margin: 20px 0;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  opacity: ${props => (props.disabled ? '0.6' : '1')};
`;

const buttonTextStyle = css`
  font-size: 12px;
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: bold;
`;
