import React, {FC} from 'react';
import {colors} from '../styles/colors';
import {UserIcon} from './icons/UserIcon';
import {StyledContainer} from './StyledContainer';

interface AvatarProps {
  big?: boolean;
}

export const Avatar: FC<AvatarProps> = ({big = false}) => {
  return (
    <StyledContainer
      containerStyled={`
            width: ${big ? '40px' : '32px'};
            height: ${big ? '40px' : '32px'};
            border-radius: ${big ? '20px;' : '16px;'};
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${colors.blue};
        `}>
      <UserIcon color={colors.white} />
    </StyledContainer>
  );
};
