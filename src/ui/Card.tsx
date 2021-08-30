import React, {FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {AppText} from './AppText';
import {StyledContainer} from './StyledContainer';

interface CardProps extends TouchableOpacityProps {
  name: string;
}

export const Card: FC<CardProps> = ({name, ...outerProps}) => {
  return (
    <TouchableOpacity {...outerProps}>
      <StyledContainer
        containerStyled={`
                padding: 20px 0 20px 15px;
                border: 1px solid #E5E5E5;
                border-radius: 4px;
                margin-bottom: 10px;
            `}>
        <AppText bold>{name}</AppText>
      </StyledContainer>
    </TouchableOpacity>
  );
};
