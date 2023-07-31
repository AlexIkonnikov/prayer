import React, {FC} from 'react';
import {ButtonProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import {colors} from '../styles/colors';
import {AppText} from './AppText';
import {Loader} from './Loader';

interface DeleteButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export const DeleteButton: FC<DeleteButtonProps> = ({
  onPress,
  title,
  isLoading = false,
}) => {
  return (
    <CustomButton onPress={onPress}>
      {isLoading ? (
        <Loader size="small" />
      ) : (
        <AppText containerStyled={appTextStyle}>{title}</AppText>
      )}
    </CustomButton>
  );
};

const CustomButton = styled.TouchableOpacity`
  height: 68px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.red};
`;

const appTextStyle = css`
  font-size: 13px;
  color: ${colors.white};
  line-height: 13px;
`;
