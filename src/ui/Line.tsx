import React, {FC} from 'react';
import styled from 'styled-components/native';
import {CSSProp} from 'styled-components';
import {colors} from '../styles/colors';

interface LineProps {
  color?: CSSProp;
}

export const Line: FC<LineProps> = ({color}) => {
  return <StyledLine color={color} />;
};

const StyledLine = styled.View<LineProps>`
  width: 3px;
  height: 22px;
  border-radius: 10px;
  margin-right: 15px;
  background-color: ${props => props.color ?? colors.red};
`;
