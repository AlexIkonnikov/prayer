import React, { FC } from 'react';
import styled, { css } from 'styled-components/native';
import { colors } from '../styles/colors';
import { Container } from './Container';
import { Row } from './Row'

interface HeaderProps {
  withTab?: boolean;
}

export const Header: FC<HeaderProps> = ({ children, withTab = false }) => {
  return (
    <HeaderContainer $isTab={withTab}>
      <Container>
        <Row containerStyled={rowStyle}>{children}</Row>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View<{ $isTab: boolean }>`
  ${props =>
    props.$isTab === false &&
    `
        margin-bottom: 15px;
        border-bottom-color: ${colors.lightGraySecond};
        border-bottom-width: 1px;
        border-style: solid;
    `}
  padding: 22px 0;
`;

const rowStyle = css`
  justify-content: flex-end;
`;
