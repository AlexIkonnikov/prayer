import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../styles/colors';
import { IconButton } from './IconButton';
import {PlusIcon} from './icons/PlusIcon';

export const RoundButton: FC = () => {
  return (
    <RoundWrapper>
      <IconButton render={() => <PlusIcon />} />
    </RoundWrapper>
  );
};

const RoundWrapper = styled.View`
  width: 32px;
  height: 32px;
  background-color: ${colors.gray};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`