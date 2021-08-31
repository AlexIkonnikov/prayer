import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../styles/colors';
import {UserIcon} from './icons/UserIcon';

interface AvatarProps {
  big?: boolean;
}

export const Avatar: FC<AvatarProps> = ({big = false}) => {
  return (
    <AvatarContainer $big={big}>
      <UserIcon color={colors.white} />
    </AvatarContainer>
  );
};

const AvatarContainer = styled.View<{$big: boolean}>`
  ${({$big}) => {
    return `
          width: ${$big ? '40px' : '32px'};
          height: ${$big ? '40px' : '32px'};
          border-radius: ${$big ? '20px;' : '16px;'};
        `;
  }}
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue};
`;
