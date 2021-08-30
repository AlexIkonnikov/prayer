import React, { FC } from 'react';
import { css } from 'styled-components';
import { colors } from '../../styles/colors';
import { AppText } from '../../ui/AppText';
import { Avatar } from '../../ui/Avatar';
import { RoundButton } from '../../ui/RoundButton';
import { Row } from '../../ui/Row';
import { StyledContainer } from '../../ui/StyledContainer';


const MemberList: FC = () => {
  return (
    <StyledContainer containerStyled={'margin: 0 15px 30px;'}>
      <AppText fs={13} color={colors.blue} upp bold>
        Members
      </AppText>
      <Row containerStyled={rowStyle}>
        <StyledContainer
          containerStyled={'margin-right: 8px;'}
        >
          <Avatar />
        </StyledContainer>

        <StyledContainer
          containerStyled={'margin-right: 8px;'}
        >
          <Avatar />
        </StyledContainer>

        <StyledContainer
          containerStyled={'margin-right: 8px;'}
        >
          <Avatar />
        </StyledContainer>
        <RoundButton />
      </Row>
    </StyledContainer>
  );
};

const rowStyle = css`margin-top: 15px;`

export default MemberList;
