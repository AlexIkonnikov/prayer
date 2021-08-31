import React, {FC} from 'react';
import styled, {css} from 'styled-components/native';
import {colors} from '../styles/colors';
import {AppText} from './AppText';

interface CounterProps {
  numeric: number;
}

export const Counter: FC<CounterProps> = ({numeric}) => {
  return (
    <Circle>
      <AppText containerStyled={appTextStyle}>{numeric}</AppText>
    </Circle>
  );
};

const Circle = styled.View`
  background: ${colors.red};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const appTextStyle = css`
  font-size: 9px;
  color: ${colors.white};
`;
