import React, {FC} from 'react';
import {colors} from '../styles/colors';
import { IconButton } from './IconButton';
import {PlusIcon} from './icons/PlusIcon';
import {StyledContainer} from './StyledContainer';

export const RoundButton: FC = () => {
  return (
    <StyledContainer
      containerStyled={`
            width: 32px;
            height: 32px;
            background-color: ${colors.gray};
            border-radius: 16px;
            align-items: center;
            justify-content: center;
        `}>
      <IconButton render={() => <PlusIcon />} />
    </StyledContainer>
  );
};
