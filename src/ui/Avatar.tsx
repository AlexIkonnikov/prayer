import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../styles/colors';
import {UserIcon} from './icons/UserIcon';

interface AvatarProps {
  isBig?: boolean;
}

export const Avatar: FC<AvatarProps> = ({isBig = false}) => {
  return (
    <AvatarContainer $isBig={isBig}>
      <UserIcon color={colors.white} />
    </AvatarContainer>
  );
};

const AvatarContainer = styled.View<{$isBig: boolean}>`
  ${({$isBig}) => {
    return `
          width: ${$isBig ? '40px' : '32px'};
          height: ${$isBig ? '40px' : '32px'};
          border-radius: ${$isBig ? '20px;' : '16px;'};
        `;
  }}
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue};
`;
