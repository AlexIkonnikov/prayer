import React, { FC } from 'react';
import Svg, { Mask, G, Path, Rect } from 'react-native-svg';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

interface UserIconProps {
  userCount?: number;
  color?: string;
}

export const UserIcon: FC<UserIconProps> = ({ userCount = 0, color = colors.blue }) => {
  return (
    <IconWrapper $isPadding={userCount > 0}>
      <Svg width="17" height="20" viewBox="0 0 17 20" fill="none">
        <Mask id="mask0" mask-type="alpha" x="0" y="0" width="17" height="20">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.5 0C5.73858 0 3.5 2.23858 3.5 5C3.5 7.76142 5.73858 10 8.5 10C11.2614 10 13.5 7.76142 13.5 5C13.5 2.23858 11.2614 0 8.5 0ZM5.5 5C5.5 3.34315 6.84315 2 8.5 2C10.1569 2 11.5 3.34315 11.5 5C11.5 6.65685 10.1569 8 8.5 8C6.84315 8 5.5 6.65685 5.5 5ZM5 12C3.67392 12 2.40215 12.5268 1.46447 13.4645C0.526784 14.4021 0 15.6739 0 17V19C0 19.5523 0.447715 20 1 20C1.55228 20 2 19.5523 2 19V17C2 16.2044 2.31607 15.4413 2.87868 14.8787C3.44129 14.3161 4.20435 14 5 14H12C12.7956 14 13.5587 14.3161 14.1213 14.8787C14.6839 15.4413 15 16.2043 15 17V19C15 19.5523 15.4477 20 16 20C16.5523 20 17 19.5523 17 19V17C17 15.6739 16.4732 14.4021 15.5355 13.4645C14.5979 12.5268 13.3261 12 12 12H5Z"
            fill={color}
          />
        </Mask>
        <G mask="url(#mask0)">
          <Rect
            x="-4"
            y="-2"
            width="24"
            height="24"
            fill={color}
          />
        </G>
      </Svg>
      {userCount > 0 ? <Number>{userCount}</Number> : null}
    </IconWrapper>
  );
};

const Number = styled.Text`
  font-size: 12px;
  color: ${colors.ligthBlack};
  padding-left: 5px;
`;

const IconWrapper = styled.View<{ $isPadding: boolean }>`
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ $isPadding }) => $isPadding && `padding-right: 18px;`}
`
