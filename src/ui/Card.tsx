import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { colors } from '../styles/colors';
import { AppText } from './AppText';

interface CardProps extends TouchableOpacityProps {
  name: string;
}

export const Card: FC<CardProps> = ({ name, ...outerProps }) => {
  return (
    <TouchableOpacity {...outerProps}>
      <CardContainer>
        <AppText containerStyled={cardTextStyle}>{name}</AppText>
      </CardContainer>
    </TouchableOpacity>
  );
};

const CardContainer = styled.View`
  padding: 20px 0 20px 15px;
  border: 1px solid ${colors.lightGraySecond};
  border-radius: 4px;
  margin-bottom: 10px;
`;

const cardTextStyle = css`font-weight: bold;`