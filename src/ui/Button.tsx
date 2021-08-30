import React, {FC} from 'react';
import {ButtonProps} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../styles/colors';
import {AppText} from './AppText';
import {StyledContainer} from './StyledContainer';

export const Button: FC<ButtonProps> = ({title, ...outerProps}) => {
  return (
    <StyledButton {...outerProps}>
      <StyledContainer containerStyled={'align-items: center;'}>
        <AppText fs={12} color={colors.white} upp bold>
          {title}
        </AppText>
      </StyledContainer>
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
  opacity: ${props => (props.disabled ? '0.6' : '1')};
`;
