import React, {FC} from 'react';
import {css} from 'styled-components';
import styled from 'styled-components/native';
import {colors} from '../../styles/colors';
import {AppText} from '../../ui/AppText';
import {Avatar} from '../../ui/Avatar';
import {RoundButton} from '../../ui/RoundButton';
import {Row} from '../../ui/Row';

const MemberList: FC = () => {
  return (
    <ListWrapper>
      <AppText containerStyled={appTextStyle}>Members</AppText>
      <Row containerStyled={rowStyle}>
        <AvatarWrapper>
          <Avatar />
        </AvatarWrapper>
        <AvatarWrapper>
          <Avatar />
        </AvatarWrapper>
        <RoundButton />
      </Row>
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  margin: 0 15px 30px;
`;

const AvatarWrapper = styled.View`
  margin-right: 8px;
`;

const rowStyle = css`
  margin-top: 15px;
`;
const appTextStyle = css`
  font-size: 13px;
  color: ${colors.blue};
  font-weight: bold;
  text-transform: uppercase;
`;

export default MemberList;
