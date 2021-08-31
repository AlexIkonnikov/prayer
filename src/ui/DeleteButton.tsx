import React, {FC} from 'react';
import {ButtonProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import {colors} from '../styles/colors';
import {AppText} from './AppText';

export const DeleteButton: FC<ButtonProps> = ({onPress, title}) => {
  return (
    <CustomButton onPress={onPress}>
      <AppText containerStyled={appTextStyle}>{title}</AppText>
    </CustomButton>
  );
};

const CustomButton = styled.TouchableOpacity`
  height: 68px;
  width: 80px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.red};
`;

const appTextStyle = css`
  font-size: 13px;
  color: ${colors.white};
`;
